import { getRandomInRange, makeArithmeticProgression } from './lib/utils';
import playGame from './lib/engine';

function findHiddenElementOfProgression() {
  const roundData = {};
  const progression = makeArithmeticProgression(10);
  const randomElementIndex = getRandomInRange(0, 10);
  roundData.answer = `${progression[randomElementIndex]}`;
  progression[randomElementIndex] = '..';
  roundData.question = progression.join(' ');
  return roundData;
}
findHiddenElementOfProgression.rules = 'What number is missing in the progression?';

playGame(findHiddenElementOfProgression);

export default findHiddenElementOfProgression;
