import { getRandomInRange } from '../utils';
import playGame from '../engine';

const gameTaskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.round(num / 2); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function generateQuizPrimeGame() {
  const roundData = {};
  roundData.question = getRandomInRange(0, 20);
  roundData.answer = isPrime(roundData.question) ? 'yes' : 'no';
  return roundData;
}


function checkIfIsPrime() {
  playGame(generateQuizPrimeGame, gameTaskDescription);
}

export default checkIfIsPrime;
