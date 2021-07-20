import getRandomNumber from '../utils.js';
import gameInit from '../index.js';

const rules = 'What number is missing in the progression?';
const progressionLength = 10;

const generate = (first, step, hiddenIndex) => {
  let result = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenIndex) {
      result += '.. ';
    } else {
      result += first + step * i;
      result += ' ';
    }
  }
  return result;
};

// прогрессия
const progressionGame = () => {
  const first = getRandomNumber(0, 10);
  const step = getRandomNumber(0, 5);
  const hiddenIndex = getRandomNumber(0, 9);

  const question = `Question: ${generate(first, step, hiddenIndex)}`;
  const rightAnswer = first + step * hiddenIndex;
  return [question, String(rightAnswer)];
};

const playGame = () => {
  gameInit(rules, progressionGame);
};

export default playGame;
