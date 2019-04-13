import { getRandomInRange, findDivisors } from './utils';

function gcdGame() {
  const roundData = {};
  const numA = getRandomInRange(0, 25);
  const numB = getRandomInRange(0, 25);
  roundData.question = `${numA} ${numB}`;
  const divisorsA = findDivisors(numA);
  const divisorsB = findDivisors(numB);
  let commonDivisors;

  if (divisorsA.length >= divisorsB.length) {
    commonDivisors = divisorsA.filter(element => (divisorsB.indexOf(element) !== -1));
  } else {
    commonDivisors = divisorsB.filter(element => (divisorsA.indexOf(element) !== -1));
  }

  // eslint-disable-next-line prefer-destructuring
  roundData.answer = `${commonDivisors[0]}`;
  return roundData;
}
gcdGame.rules = 'Find the greatest common divisor of given numbers.';

export default gcdGame;
