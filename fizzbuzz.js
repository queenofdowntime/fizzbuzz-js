function isDivisibleBy(number, divisor) {
  if (number % divisor === 0) {
    return true;
  }
}

module.exports = {
  isDivisibleBy: isDivisibleBy
}
