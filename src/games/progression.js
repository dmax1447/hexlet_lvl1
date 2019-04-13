import { getRandomInRange, makeArithmeticProgression } from './utils';

function progressionGame() {
  const roundData = {};
  const progression = makeArithmeticProgression(10);
  const randomElementIndex = getRandomInRange(0, 10);
  roundData.answer = `${progression[randomElementIndex]}`;
  progression[randomElementIndex] = '..';
  roundData.question = progression.join(' ');
  return roundData;
}
progressionGame.rules = 'What number is missing in the progression?';

export default progressionGame;
