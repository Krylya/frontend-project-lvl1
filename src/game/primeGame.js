import { gameInit, getRandomNumber } from '../index.js';

const primeGame = () => {
  const aboutGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  //let stringFromNum = null;
  let num = null;

  const getQuestion = () => {
    num = getRandomNumber(20);
    //stringFromNum = String(num);
    console.log(`Question: ${num}`);
  };

  const getRightAnswer = () => {
    let isSimply = true;
    for (let i = 0; i < num, num -=1) {
        if(num % i === 0) isSimply = false;
    }
    if (isSimply) return 'yes';
    return 'no';
  };

  gameInit(aboutGame, getQuestion, getRightAnswer);
};

export default primeGame;
