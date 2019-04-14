
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

function findGreatCommonDivisor(numA, numB) {
  const divisorsA = findDivisors(numA);
  const divisorsB = findDivisors(numB);
  let commonDivisors;

  if (divisorsA.length >= divisorsB.length) {
    commonDivisors = divisorsA.filter(element => (divisorsB.indexOf(element) !== -1));
  } else {
    commonDivisors = divisorsB.filter(element => (divisorsA.indexOf(element) !== -1));
  }
  return commonDivisors[0];
}


function makeArithmeticProgression() {
  const progression = [];
  const progressionStep = getRandomInRange(1, 5);
  const startNum = getRandomInRange(0, 20);
  for (let i = 0; i < 10; i += 1) {
    progression[i] = startNum + progressionStep * i;
  }
  return progression;
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.round(num / 2); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

export {
  getRandomInRange, isEven, makeArithmeticProgression,
  isPrime, findGreatCommonDivisor,
};
