import { getRandomNumber } from '../utils.js';

const rules = 'What number is missing in the progression?';

// прогрессия
const progressionGame = () => {
  const progressionLength = 10;
  const firstNum = getRandomNumber(0, 10);
  const deltaNum = getRandomNumber(0, 5);
  const emptyNum = getRandomNumber(0, 9);

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

  const rightAnswer = deltaNum * emptyNum + firstNum;
  return String(rightAnswer);
};

export { progressionGame, rules };
