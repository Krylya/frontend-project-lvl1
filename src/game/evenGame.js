import gameInit from '../index.js';
import getRandomNumber from '../utils.js';

const evenGame = () => {
  const aboutGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  let isEven = null;

  const getQuestion = () => {
    const randomNum = getRandomNumber(100);
    isEven = randomNum % 2 === 0;
    console.log(`Question: ${randomNum}`);
  };

  const getRightAnswer = () => (isEven ? 'yes' : 'no');

  gameInit(aboutGame, getQuestion, getRightAnswer);
};

export default evenGame;
