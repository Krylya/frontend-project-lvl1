import gameInit from '../index.js';
import { getRandomNumber, mathematicalOperation } from '../utils.js';

const rules = 'What is the result of the expression?';

const calcGame = () => {
  const operations = ['+', '-', '*'];
  const firstNum = getRandomNumber(1, 20);
  const secodNum = getRandomNumber(1, 10);
  const operationsIndex = getRandomNumber(0, 2);

  const question = `Question: ${firstNum} ${operations[operationsIndex]} ${secodNum}`;
  const rightAnswer = mathematicalOperation(operations[operationsIndex], firstNum, secodNum);

  return [question, String(rightAnswer)];
};

const playGame = () => {
  gameInit(rules, calcGame);
};

export default playGame;
