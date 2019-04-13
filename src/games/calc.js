import { getRandomInRange } from './utils';

const operationVariants = ['+', '-', '*'];

function calcGame() {
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
calcGame.rules = 'What is the result of the expression?';

export default calcGame;
