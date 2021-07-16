import gameInit from '../index.js';
import getRandomNumber from '../utils.js';

// общий знаменатель
const nodQuestion = () => {
  const aboutGame = 'Find the greatest common divisor of given numbers.';
  let firstNum = null;
  let secodNum = null;

  const gcd = (a, b) => {
    if (!b) {
      return a;
    }
    return gcd(b, a % b);
  };

  const getQuestion = () => {
    firstNum = getRandomNumber(100);
    secodNum = getRandomNumber(100);
    console.log(`Question: ${firstNum} ${secodNum}`);
  };

  const getRightAnswer = () => {
    const num = gcd(firstNum, secodNum);
    return String(num);
  };

  gameInit(aboutGame, getQuestion, getRightAnswer);
};

export default nodQuestion;
