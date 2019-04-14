import { getRandomInRange } from '../lib/utils';
import playGame from '../lib/engine';

function makeArithmeticProgression() {
  const progression = [];
  const progressionStep = getRandomInRange(1, 5);
  const progressionLength = 10;
  const startNum = getRandomInRange(0, 20);
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = startNum + progressionStep * i;
  }
  return progression;
}

function generateQuizProgressionGame() {
  const roundData = {};
  const progression = makeArithmeticProgression(10);
  const randomElementIndex = getRandomInRange(0, 9);
  roundData.answer = `${progression[randomElementIndex]}`;
  progression[randomElementIndex] = '..';
  roundData.question = progression.join(' ');
  return roundData;
}

function findHiddenElementOfProgression() {
  playGame(generateQuizProgressionGame, 'What number is missing in the progression?');
}

export default findHiddenElementOfProgression;
