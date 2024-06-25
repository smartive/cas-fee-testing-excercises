import { feathers } from '@feathersjs/feathers'
import { bodyParser, errorHandler, koa, rest, serveStatic } from '@feathersjs/koa'
import socketio from '@feathersjs/socketio'

interface Message {
  id?: number
  text: string
}

class MessageService {
  messages: Message[] = []

  async find() {
    return this.messages
  }

  async create(data: Pick<Message, 'text'>) {
    const message: Message = {
      id: this.messages.length,
      text: data.text
    }

    this.messages.push(message)

    return message
  }
}

type ServiceTypes = {
  messages: MessageService
}

const app = koa<ServiceTypes>(feathers())

app.use(serveStatic('.'))
app.use(errorHandler())
app.use(bodyParser())

app.configure(rest())
app.configure(socketio())

app.use('messages', new MessageService())

app.on('connection', (connection) => app.channel('everybody').join(connection))

app.publish((_data) => app.channel('everybody'))

app
  .listen(3030)
  .then(() => console.log('Feathers server listening on localhost:3030'))

app.service('messages').create({
  text: 'Hello world from the server'
})