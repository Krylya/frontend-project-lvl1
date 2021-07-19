import gameInit from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const evenGame = () => {
  const randomNum = getRandomNumber(1, 100);
  const question = `Question: ${randomNum}`;
  const rightAnswer = isEven(randomNum) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const playGame = () => {
  gameInit(rules, evenGame);
};

export default playGame;
