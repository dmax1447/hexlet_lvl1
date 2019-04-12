import readlineSync from 'readline-sync';

// функция раунда игры в чет-нечет

function evenGame() {
  const roundData = {
    correctAnswer: null,
    userAnswer: null,
  };
  const isEven = num => (num % 2) === 0;
  const question = Math.round(Math.random() * 15);
  roundData.correctAnswer = isEven(question) ? 'yes' : 'no';
  console.log(`Question: ${question}`);
  roundData.userAnswer = readlineSync.question('Your answer: ');
  return roundData;
}

export default evenGame;
