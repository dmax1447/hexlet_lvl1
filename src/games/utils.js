
function getRandomInRange(rangeStart, rangeEnd) {
  return Math.round(Math.random() * rangeEnd) - rangeStart;
}

function isEven(num) {
  return (num % 2) === 0;
}

export { getRandomInRange, isEven };
