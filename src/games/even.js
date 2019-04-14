import { getRandomInRange } from './lib/utils';

function isEven(num) {
  return (num % 2) === 0;
}

function guessIfItEvenNum() {
  const roundData = {};
  roundData.question = getRandomInRange(0, 15);
  roundData.answer = isEven(roundData.question) ? 'yes' : 'no';
  return roundData;
}

export default guessIfItEvenNum;
