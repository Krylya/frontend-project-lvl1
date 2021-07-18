import { getRandomNumber } from '../utils.js';

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

  console.log(`Question: ${firstNum} ${secodNum}`);

  const getRightAnswer = () => gcd(firstNum, secodNum);

  const rightAnswer = getRightAnswer();
  return String(rightAnswer);
};

export { nodGame, rules };
