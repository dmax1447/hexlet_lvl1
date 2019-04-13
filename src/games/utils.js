
function getRandomInRange(rangeStart, rangeEnd) {
  return Math.round(Math.random() * rangeEnd) - rangeStart;
}

function isEven(num) {
  return (num % 2) === 0;
}

function findDivisors(num) {
  const divisors = [];
  for (let i = num; i > 0; i -= 1) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}

export { getRandomInRange, isEven, findDivisors };
