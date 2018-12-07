function isDivisibleByThree(number) {
  if (number % 3 === 0) {
    return true;
  }
}

function isDivisibleByFive(number) {
  if (number % 5 === 0) {
    return true;
  }
}

function isDivisibleByThreeAndFive(number) {
  if (number % 15 === 0) {
    return true;
  }
}

module.exports = {
  isDivisibleByThree: isDivisibleByThree,
  isDivisibleByFive: isDivisibleByFive,
  isDivisibleByThreeAndFive: isDivisibleByThreeAndFive
}
