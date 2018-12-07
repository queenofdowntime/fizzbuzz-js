const fizzbuzz = require('./fizzbuzz');

describe('Fizzbuzz', () => {
  test('knows when a number is divisible by 3',() => {
    expect(fizzbuzz.isDivisibleByThree(3)).toBeTruthy();
  });

  test('knows when a number NOT is divisible by 3',() => {
    expect(fizzbuzz.isDivisibleByThree(1)).toBeFalsy();
  });
});
