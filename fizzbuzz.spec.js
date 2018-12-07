const fizzbuzz = require('./fizzbuzz');

describe('Fizzbuzz', () => {
  test('knows when a number is divisible by 3',() => {
    expect(fizzbuzz.isDivisibleBy(3, 3)).toBeTruthy();
  });

  test('knows when a number NOT is divisible by 3',() => {
    expect(fizzbuzz.isDivisibleBy(1, 3)).toBeFalsy();
  });

  test('knows when a number is divisible by 5',() => {
    expect(fizzbuzz.isDivisibleBy(5, 5)).toBeTruthy();
  });

  test('knows when a number is NOT divisible by 5',() => {
    expect(fizzbuzz.isDivisibleBy(1, 5)).toBeFalsy();
  });

  test('knows when a number is divisible by 3 and 5',() => {
    expect(fizzbuzz.isDivisibleBy(15, 15)).toBeTruthy();
  });

  test('knows when a number is NOT divisible by 3 and 5',() => {
    expect(fizzbuzz.isDivisibleBy(1, 15)).toBeFalsy();
  });
});
