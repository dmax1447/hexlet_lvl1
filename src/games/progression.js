import { getRandomInRange } from './lib/utils';
import playGame from './lib/engine';

function makeArithmeticProgression() {
  const progression = [];
  const progressionStep = getRandomInRange(1, 5);
  const startNum = getRandomInRange(0, 20);
  for (let i = 0; i < 10; i += 1) {
    progression[i] = startNum + progressionStep * i;
  }
  return progression;
}

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
