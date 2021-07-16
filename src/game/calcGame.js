import readlineSync from 'readline-sync';
import gameInit from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'What is the result of the expression?';

const calcGame = () => {
  const operators = ['+', '-', '*'];
  const firstNum = getRandomNumber(20);
  const secodNum = getRandomNumber(10);
  const operatorIndex = Math.floor((Math.random() * operators.length));

  console.log(`Question: ${firstNum} ${operators[operatorIndex]} ${secodNum}`);
  const lastUserAnswer = readlineSync.question('Your answer: ');
  console.log('lastUserAnswer in game -- ', lastUserAnswer);

  const getRightAnswer = () => {
    let right = '';

    switch (operatorIndex) {
      case 0:
        right = firstNum + secodNum;
        break;
      case 1:
        right = firstNum - secodNum;
        break;
      case 2:
        right = firstNum * secodNum;
        break;
      default:
        break;
    }

    return right;
  };

  if (+lastUserAnswer === getRightAnswer()) return true;
  return false;
};

export { calcGame, rules };
