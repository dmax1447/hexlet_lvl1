
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

function makeArithmeticProgression(startNum) {
  const progression = [];
  const PROGRESSION_STEP = 3;
  progression[0] = startNum;
  for (let i = 1; i < 10; i += 1) {
    progression[i] = progression[i - 1] + PROGRESSION_STEP;
  }
  return progression;
}

export {
  getRandomInRange, isEven, findDivisors, makeArithmeticProgression,
};
