import readlineSync from 'readline-sync';

function meetUser() {
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}`);
}


function playEvenGame() {
  console.log('Welcome to Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no"');
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}`);
  const isEven = num => (num % 2) !== 0;

  for (let i = 0; i < 3; i += 1) {
    const question = Math.round(Math.random() * 15);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Lets try again, ${userName} ! `);
      return;
    }
  }
  console.log(`Congratulations, ${userName} ! `);
}

function playCalcGame() {
  console.log('Welcome to Brain Games!');
  console.log('What is the result of the expression?');
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}`);

  for (let i = 0; i < 3; i += 1) {
    let questionAnswer;
    const operationVariants = ['+', '-', '*'];
    const arg1 = Math.round(Math.random() * 10);
    const arg2 = Math.round(Math.random() * 10);
    const operation = operationVariants[Math.round(Math.random() * 2)];
    console.log(`Question: ${arg1} ${operation} ${arg2}`);
    switch (operation) {
      case '+':
        questionAnswer = arg1 + arg2;
        break;
      case '-':
        questionAnswer = arg1 - arg2;
        break;
      case '*':
        questionAnswer = arg1 * arg2;
        break;
      default:
        break;
    }
    const userAnswer = parseInt(readlineSync.question('Your Answer: '), 10);
    if (questionAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${questionAnswer}.`);
      console.log(`Lets try again, ${userName} ! `);
      return;
    }
  }
  console.log(`Congratulations, ${userName} ! `);
}

export { meetUser, playEvenGame, playCalcGame };
