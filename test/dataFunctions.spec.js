import { example, anotherExample } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

// eslint-disable-next-line no-console
console.log(fakeData);

describe('example', () => {

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

describe('anotherExample', () => {

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
