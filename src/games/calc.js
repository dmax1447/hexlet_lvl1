import readlineSync from 'readline-sync';

// функция раунда игры в калькулятор

function calcGame() {
  const roundData = {
    correctAnswer: null,
    userAnswer: null,
  };
  const operationVariants = ['+', '-', '*'];
  const arg1 = Math.round(Math.random() * 10);
  const arg2 = Math.round(Math.random() * 10);
  const operation = operationVariants[Math.round(Math.random() * 2)];
  console.log(`Question: ${arg1} ${operation} ${arg2}`);
  switch (operation) {
    case '+':
      roundData.correctAnswer = arg1 + arg2;
      break;
    case '-':
      roundData.correctAnswer = arg1 - arg2;
      break;
    case '*':
      roundData.correctAnswer = arg1 * arg2;
      break;
    default:
      break;
  }
  roundData.userAnswer = parseInt(readlineSync.question('Your Answer: '), 10);
  return roundData;
}

export default calcGame;
