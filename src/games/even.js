import { getRandomInRange, isEven } from './lib/utils';
import playGame from './lib/engine';

function guessIfItEvenNum() {
  const roundData = {};
  roundData.question = getRandomInRange(0, 15);
  roundData.answer = isEven(roundData.question) ? 'yes' : 'no';
  return roundData;
}
guessIfItEvenNum.rules = 'Answer "yes" if number even otherwise answer "no"';

playGame(guessIfItEvenNum);

export default guessIfItEvenNum;
