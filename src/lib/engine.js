import readlineSync from 'readline-sync';

const numOfRounds = 3;

function playGame(generateQuiz, gameDescription) {
  console.log('Welcome to Brain Games!');
  console.log(gameDescription);
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}`);
  for (let i = 0; i < numOfRounds; i += 1) {
    const roundData = generateQuiz();
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

export default playGame;
