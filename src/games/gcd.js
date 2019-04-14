import { getRandomInRange, findGreatCommonDivisor } from './lib/utils';
import playGame from './lib/engine';


function findGcdOfRandomNums() {
  const roundData = {};
  const numA = getRandomInRange(1, 30);
  const numB = getRandomInRange(1, 30);
  roundData.question = `${numA} ${numB}`;
  roundData.answer = `${findGreatCommonDivisor(numA, numB)}`;
  return roundData;
}
findGcdOfRandomNums.rules = 'Find the greatest common divisor of given numbers.';

playGame(findGcdOfRandomNums);

export default findGcdOfRandomNums;
