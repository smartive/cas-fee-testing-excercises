import test from 'ava';
import { quicksort } from '../src/quicksort';

test('quicksort([]) should return []', (t) => {
  t.fail();
});

test('quicksort([1]) should return [1]', (t) => {
  t.fail();
});

test('quicksort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]) should return [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]', (t) => {
  t.fail();
});

test('quicksort([9, 8, 7, 6, 5, 4, 3, 2, 1]) should return [1, 2, 3, 4, 5, 6, 7, 8, 9]', (t) => {
  t.fail();
});

test('quicksort([1, 2, 3, 4, 5, 6, 7, 8, 9]) should return [1, 2, 3, 4, 5, 6, 7, 8, 9]', (t) => {
  t.fail();
});

test('quicksort(["foo", "bar", "baz"]) should return ["bar", "baz", "foo"]', (t) => {
  t.fail();
});

test('quicksort([1, 2, 3, "foo", 4, 5]) should return [1, 2, 3, "foo", 4, 5]', (t) => {
  t.fail();
});
