import { getRandomInRange } from './lib/utils';
import playGame from './lib/engine';

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

function checkIfIsPrime() {
  const roundData = {};
  roundData.question = getRandomInRange(0, 20);
  roundData.answer = isPrime(roundData.question) ? 'yes' : 'no';
  return roundData;
}
checkIfIsPrime.rules = 'Answer "yes" if given number is prime. Otherwise answer "no"';

playGame(checkIfIsPrime);

export default checkIfIsPrime;
