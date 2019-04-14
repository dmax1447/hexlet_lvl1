import { getRandomInRange, isPrime } from './lib/utils';
import playGame from './lib/engine';

function checkIfIsPrime() {
  const roundData = {};
  roundData.question = getRandomInRange(0, 20);
  roundData.answer = isPrime(roundData.question) ? 'yes' : 'no';
  return roundData;
}
checkIfIsPrime.rules = 'Answer "yes" if given number is prime. Otherwise answer "no"';

playGame(checkIfIsPrime);

export default checkIfIsPrime;
