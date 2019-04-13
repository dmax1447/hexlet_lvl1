import { getRandomInRange, isPrime } from './utils';

function primeGame() {
  const roundData = {};
  roundData.question = getRandomInRange(0, 20);
  roundData.answer = isPrime(roundData.question) ? 'yes' : 'no';
  return roundData;
}
primeGame.rules = 'Answer "yes" if given number is prime. Otherwise answer "no"';

export default primeGame;
