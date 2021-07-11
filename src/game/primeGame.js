import { gameInit, getRandomNumber } from '../index.js';

const primeGame = () => {
  const aboutGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  let stringFromNum = null;

  const getQuestion = () => {
    const num = getRandomNumber(20);
    stringFromNum = String(num);
    console.log(`Question: ${num}`);
  };

  const getRightAnswer = () => {
    if (stringFromNum.length > 1) return 'no';
    return 'yes';
  };

  gameInit(aboutGame, getQuestion, getRightAnswer);
};

export default primeGame;
