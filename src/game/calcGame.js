import gameInit from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'What is the result of the expression?';

const calculate = (operation, operand1, operand2) => {
  let result = '';
  switch (operation) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    default:
      break;
  }
  return result;
};

const calcGame = () => {
  const operations = ['+', '-', '*'];
  const firstNum = getRandomNumber(1, 20);
  const secodNum = getRandomNumber(1, 10);
  const operationsIndex = getRandomNumber(0, 2);

  const question = `Question: ${firstNum} ${operations[operationsIndex]} ${secodNum}`;
  const rightAnswer = calculate(operations[operationsIndex], firstNum, secodNum);

  return [question, String(rightAnswer)];
};

const playGame = () => {
  gameInit(rules, calcGame);
};

export default playGame;
