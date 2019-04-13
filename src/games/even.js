import { getRandomInRange, isEven } from './utils';

function evenGame() {
  const roundData = {};
  roundData.question = getRandomInRange(0, 15);
  roundData.answer = isEven(roundData.question) ? 'yes' : 'no';
  return roundData;
}
evenGame.rules = 'Answer "yes" if number even otherwise answer "no"';

export default evenGame;
