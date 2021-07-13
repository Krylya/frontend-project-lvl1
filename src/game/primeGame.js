import { gameInit, getRandomNumber } from '../index.js';

const primeGame = () => {
  const aboutGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  // let stringFromNum = null;
  let num = null;

  const getQuestion = () => {
    num = getRandomNumber(20);
    // stringFromNum = String(num);
    console.log(`Question: ${num}`);
  };

  const getRightAnswer = () => {
    if (num === 1) return 'yes';

    let isSimply = true;

    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) isSimply = false;
    }
    if (isSimply) return 'yes';
    return 'no';
  };

  gameInit(aboutGame, getQuestion, getRightAnswer);
};

export default primeGame;
