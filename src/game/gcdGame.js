import getRandomNumber from '../utils.js';
import gameInit from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

// общий знаменатель
const gcdGame = () => {
  const firstNum = getRandomNumber(1, 100);
  const secodNum = getRandomNumber(1, 100);
  const question = `Question: ${firstNum} ${secodNum}`;

  const rightAnswer = gcd(firstNum, secodNum);
  return [question, String(rightAnswer)];
};

const playGame = () => {
  gameInit(rules, gcdGame);
};

export default playGame;
