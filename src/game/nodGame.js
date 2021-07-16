import readlineSync from 'readline-sync';
import { getRandomNumber, checkAnswer } from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';

// общий знаменатель
const nodGame = () => {
  const firstNum = getRandomNumber(100);
  const secodNum = getRandomNumber(100);

  const gcd = (a, b) => {
    if (!b) {
      return a;
    }
    return gcd(b, a % b);
  };

  console.log(`Question: ${firstNum} ${secodNum}`);
  const userAnswer = readlineSync.question('Your answer: ');

  const getRightAnswer = () => {
    const num = gcd(firstNum, secodNum);
    return String(num);
  };

  const rightAnswer = getRightAnswer();
  const result = checkAnswer(rightAnswer, userAnswer);
  return result;
};

export { nodGame, rules };
