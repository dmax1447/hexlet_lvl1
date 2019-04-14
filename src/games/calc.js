import { getRandomInRange } from '../lib/utils';
import playGame from '../lib/engine';

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

function calcRandomExpression() {
  playGame(generateQuizRandomExpression, 'What is the result of the expression?');
}

export default calcRandomExpression;
