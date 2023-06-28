import test from 'ava';
import { instance, mock, verify, when } from 'ts-mockito';
import { Store, WarehouseStorage } from '../src/product-store';

test('return inventory', (t) => {
  const mockStore = mock(WarehouseStorage);
  when(mockStore.check('apple')).thenReturn(10);
  when(mockStore.check('banana')).thenReturn(10);
  when(mockStore.check('orange')).thenReturn(10);

  const svc = new Store(instance(mockStore));

  // TODO
});

test('calls fetch for bananas', (t) => {
  const mockStore = mock(WarehouseStorage);
  const svc = new Store(instance(mockStore));

  // TODO
});
