import { getRandomInRange } from '../lib/utils';
import playGame from '../lib/engine';

function isEven(num) {
  return (num % 2) === 0;
}

function generateQuizIfItEvenNum() {
  const roundData = {};
  roundData.question = getRandomInRange(0, 15);
  roundData.answer = isEven(roundData.question) ? 'yes' : 'no';
  return roundData;
}

function guessIfItEvenNum() {
  playGame(generateQuizIfItEvenNum, 'Answer "yes" if number even otherwise answer "no"');
}

export default guessIfItEvenNum;
