import { getRandomNumber } from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = () => {
  const randomNum = getRandomNumber(1, 100);
  const isEven = randomNum % 2 === 0;
  console.log(`Question: ${randomNum}`);

  const getRightAnswer = () => (isEven ? 'yes' : 'no');
  return getRightAnswer();
};

export { evenGame, rules };
