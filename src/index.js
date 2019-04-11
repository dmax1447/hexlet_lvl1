import readlineSync from 'readline-sync';

function meetUser() {
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}`);
  return userName;
}

function playEvenGame() {
  console.log('Welcome to Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no"');
  const userName = meetUser();
  let isUserWinGame = true;
  let stepsCount = 3;
  while (isUserWinGame && stepsCount > 0) {
    const randomNum = Math.round(Math.random() * 15);
    const correctAnswer = (randomNum % 2) !== 0 ? 'yes' : 'no';
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Lets try again, ${userName} ! `);
      isUserWinGame = false;
    }
    stepsCount -= 1;
  }
  if (isUserWinGame) {
    console.log(`Congratulations, ${userName} ! `);
  }
}

export { meetUser, playEvenGame };
