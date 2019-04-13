import readlineSync from 'readline-sync';

const NUM_OF_ROUNDS = 3;

function meetUser() {
  console.log('Welcome to Brain Games!');
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}`);
}

function playGame(gameFunc) {
  console.log('Welcome to Brain Games!');
  console.log(gameFunc.rules);
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}`);
  for (let i = 0; i < NUM_OF_ROUNDS; i += 1) {
    const roundData = gameFunc();
    console.log(`Question: ${roundData.question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (roundData.answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${roundData.answer}.`);
      console.log(`Lets try again, ${userName} ! `);
      return;
    }
  }
  console.log(`Congratulations, ${userName} ! `);
}

export { meetUser, playGame };
