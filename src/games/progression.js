import { getRandomInRange } from '../utils';
import playGame from '../engine';

const gameTaskDescription = 'What number is missing in the progression?';
const progressionLength = 10;

function makeArithmeticProgression() {
  const progression = [];
  const progressionStep = getRandomInRange(1, 5);
  const startNum = getRandomInRange(0, 20);
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = startNum + progressionStep * i;
  }
  return progression;
}

function generateQuizProgression() {
  const roundData = {};
  const progression = makeArithmeticProgression(10);
  const randomElementIndex = getRandomInRange(0, progression.length - 1);
  roundData.answer = `${progression[randomElementIndex]}`;
  progression[randomElementIndex] = '..';
  roundData.question = progression.join(' ');
  return roundData;
}

function launchGameProgression() {
  playGame(generateQuizProgression, gameTaskDescription);
}

export default launchGameProgression;
