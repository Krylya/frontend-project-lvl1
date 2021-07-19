import getRandomNumber from '../utils.js';
import gameInit from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1) return true;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const primeGame = () => {
  const num = getRandomNumber(1, 20);
  const question = `Question: ${num}`;
  const rightAnswer = isPrime(num) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const playGame = () => {
  gameInit(rules, primeGame);
};

export default playGame;
