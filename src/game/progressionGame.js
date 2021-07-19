import getRandomNumber from '../utils.js';
import gameInit from '../index.js';

const rules = 'What number is missing in the progression?';
const progressionLength = 10;

const generate = (firstNum, deltaNum, emptyNum) => {
  let result = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === emptyNum) {
      result += '.. ';
    } else {
      result += firstNum + deltaNum * i;
      result += ' ';
    }
  }
  return result;
};

// прогрессия
const progressionGame = () => {
  const firstNum = getRandomNumber(0, 10);
  const deltaNum = getRandomNumber(0, 5);
  const emptyNum = getRandomNumber(0, 9);

  const question = `Question: ${generate(firstNum, deltaNum, emptyNum)}`;
  const rightAnswer = deltaNum * emptyNum + firstNum;
  return [question, String(rightAnswer)];
};

const playGame = () => {
  gameInit(rules, progressionGame);
};

export default playGame;
