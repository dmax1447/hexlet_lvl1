import { getRandomInRange } from './lib/utils';

const operationVariants = ['+', '-', '*'];

function calcRandomExpression() {
  const roundData = {};
  const arg1 = getRandomInRange(0, 10);
  const arg2 = getRandomInRange(0, 10);
  const operation = operationVariants[getRandomInRange(0, 2)];
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

export default calcRandomExpression;
