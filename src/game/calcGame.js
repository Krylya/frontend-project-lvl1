import { gameInit, getRandomNumber } from '../index.js';

// калькулятор
const calcGame = () => {
  const aboutGame = 'What is the result of the expression?';
  const operators = ['+', '-', '*'];
  let firstNum = null;
  let secodNum = null;
  let operatorIndex = null;

  const getQuestion = () => {
    firstNum = getRandomNumber(20);
    secodNum = getRandomNumber(10);
    operatorIndex = Math.floor((Math.random() * operators.length));

    console.log(`Question: ${firstNum} ${operators[operatorIndex]} ${secodNum}`);
  };

  const getRightAnswer = () => {
    switch (operatorIndex) {
      case 0:
        return String(firstNum + secodNum);
        break;
      case 1:
        return String(firstNum - secodNum);
        break;
      case 2:
        return String(firstNum * secodNum);
        break;
      default:
        break;
    }
  };

  gameInit(aboutGame, getQuestion, getRightAnswer);
};

export default calcGame;
