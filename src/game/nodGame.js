import { getRandomNumber } from '../utils.js';
import gameInit from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

// общий знаменатель
const nodGame = () => {
  const firstNum = getRandomNumber(1, 100);
  const secodNum = getRandomNumber(1, 100);

  const gcd = (a, b) => {
    if (!b) {
      return a;
    }
    return gcd(b, a % b);
  };

  const getRightAnswer = () => gcd(firstNum, secodNum);

  const question = `Question: ${firstNum} ${secodNum}`;
  const rightAnswer = getRightAnswer();
  return [question, String(rightAnswer)];
};

const playGame = () => {
  gameInit(rules, nodGame);
};

export default playGame;
