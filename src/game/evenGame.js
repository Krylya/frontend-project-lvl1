import gameInit from '../index.js';
import { getRandomNumber } from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = () => {
  const randomNum = getRandomNumber(1, 100);
  const isEven = randomNum % 2 === 0;
  const getRightAnswer = () => (isEven ? 'yes' : 'no');

  const question = `Question: ${randomNum}`;
  const rightAnswer = getRightAnswer();
  return [question, rightAnswer];
};

const playGame = () => {
  gameInit(rules, evenGame);
};

export default playGame;
