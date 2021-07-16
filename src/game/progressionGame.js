import readlineSync from 'readline-sync';
import { getRandomNumber, checkAnswer } from '../utils.js';

const rules = 'What number is missing in the progression?';

// прогрессия
const progressionGame = () => {
  const progressionLength = 10;
  const firstNum = getRandomNumber(10);
  const deltaNum = getRandomNumber(5);
  const emptyNum = getRandomNumber(9);

  let result = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === emptyNum) {
      result += '.. ';
    } else {
      result += firstNum + deltaNum * i;
      result += ' ';
    }
  }

  console.log(`Question: ${result}`);
  const userAnswer = readlineSync.question('Your answer: ');

  const rightAnswer = deltaNum * emptyNum + firstNum;
  return checkAnswer(rightAnswer, userAnswer, 'num');
};

export { progressionGame, rules };
