import test from 'ava';
import { BinaryTree, breadthFirstTraversal, depthFirstTraversal } from '../src/tree-traversal';

test('BinaryTree constructor should create a binary tree with the given value and left and right subtrees', (t) => {
  const left = new BinaryTree(2);
  const right = new BinaryTree(3);
  const tree = new BinaryTree(1, left, right);

  // TODO
});

test('depthFirstTraversal should traverse the tree in depth-first order', (t) => {
  const left = new BinaryTree(2, new BinaryTree(3, new BinaryTree(4, new BinaryTree(5))));
  const right = new BinaryTree(6);
  const tree = new BinaryTree(1, left, right);
  const values: number[] = [];

  // TODO
});

test('breadthFirstTraversal should traverse the tree in breadth-first order', (t) => {
  const left = new BinaryTree(2, new BinaryTree(3, new BinaryTree(4, new BinaryTree(5))));
  const right = new BinaryTree(6);
  const tree = new BinaryTree(1, left, right);
  const values: number[] = [];

  // TODO
});
