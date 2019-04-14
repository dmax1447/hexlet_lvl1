
function getRandomInRange(rangeStart, rangeEnd) {
  return Math.round(Math.random() * rangeEnd) - rangeStart;
}

// eslint-disable-next-line import/prefer-default-export
export { getRandomInRange };
