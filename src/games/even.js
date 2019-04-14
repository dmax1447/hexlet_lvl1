import { getRandomInRange } from '../utils';
import playGame from '../engine';

const gameTaskDescription = 'Answer "yes" if number even otherwise answer "no"';

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
  playGame(generateQuizIfItEvenNum, gameTaskDescription);
}

export default guessIfItEvenNum;
