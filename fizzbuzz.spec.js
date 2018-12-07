const fizzbuzz = require('./fizzbuzz');

describe('Fizzbuzz', () => {
  test('knows when a number is divisible by 3',() => {
    expect(fizzbuzz.isDivisibleByThree(3)).toBeTruthy();
  });

  test('knows when a number NOT is divisible by 3',() => {
    expect(fizzbuzz.isDivisibleByThree(1)).toBeFalsy();
  });

  test('knows when a number is divisible by 5',() => {
    expect(fizzbuzz.isDivisibleByFive(5)).toBeTruthy();
  });

  test('knows when a number is NOT divisible by 5',() => {
    expect(fizzbuzz.isDivisibleByFive(1)).toBeFalsy();
  });

  test('knows when a number is divisible by 3 and 5',() => {
    expect(fizzbuzz.isDivisibleByThreeAndFive(15)).toBeTruthy();
  });

  test('knows when a number is NOT divisible by 3 and 5',() => {
    expect(fizzbuzz.isDivisibleByThreeAndFive(1)).toBeFalsy();
  });
});
