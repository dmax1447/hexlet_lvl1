import readlineSync from 'readline-sync';

const numOfRounds = 3;

function meetUserAndShowRules(rules) {
  console.log('Welcome to Brain Games!');
  console.log(rules);
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}`);
  return userName;
}

function playGame(gameFunc) {
  const userName = meetUserAndShowRules(gameFunc.rules);
  for (let i = 0; i < numOfRounds; i += 1) {
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

export default playGame;
