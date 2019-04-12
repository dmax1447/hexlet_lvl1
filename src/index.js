import readlineSync from 'readline-sync';

function meetUser() {
  console.log('Welcome to Brain Games!');
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}`);
}

// игровой движок
// параметры:
// функция раунда игры (возвращает объект с ответом игрока и правильным ответом)
// строка c описанием правил
// количество раундов

function playGame(gameFunc, gameRules, numOfRounds) {
  console.log('Welcome to Brain Games!');
  console.log(gameRules);
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}`);
  for (let i = 0; i < numOfRounds; i += 1) {
    const roundData = gameFunc();
    if (roundData.correctAnswer === roundData.userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${roundData.userAnswer} is wrong answer ;(. Correct answer was ${roundData.correctAnswer}.`);
      console.log(`Lets try again, ${userName} ! `);
      return;
    }
  }
  console.log(`Congratulations, ${userName} ! `);
}

export { meetUser, playGame };
