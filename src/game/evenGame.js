import readlineSync from 'readline-sync';
import { getRandomNumber, checkAnswer } from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = () => {
  const randomNum = getRandomNumber(100);
  const isEven = randomNum % 2 === 0;
  console.log(`Question: ${randomNum}`);
  const userAnswer = readlineSync.question('Your answer: ');

  const getRightAnswer = () => (isEven ? 'yes' : 'no');

  const rightAnswer = getRightAnswer();
  const result = checkAnswer(rightAnswer, userAnswer);
  return result;
};

export { evenGame, rules };
