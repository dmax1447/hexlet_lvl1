import { getRandomInRange } from '../utils';
import playGame from '../engine';

const gameTaskDescription = 'What is the result of the expression?';
const operationVariants = ['+', '-', '*'];

function generateQuizRandomExpression() {
  const roundData = {};
  const arg1 = getRandomInRange(0, 10);
  const arg2 = getRandomInRange(0, 10);
  const operation = operationVariants[getRandomInRange(0, operationVariants.length - 1)];
  roundData.question = `${arg1} ${operation} ${arg2}`;
  switch (operation) {
    case '+':
      roundData.answer = `${arg1 + arg2}`;
      break;
    case '-':
      roundData.answer = `${arg1 - arg2}`;
      break;
    case '*':
      roundData.answer = `${arg1 * arg2}`;
      break;
    default:
      break;
  }
  return roundData;
}

function launchGameCalc() {
  playGame(generateQuizRandomExpression, gameTaskDescription);
}

export default launchGameCalc;
