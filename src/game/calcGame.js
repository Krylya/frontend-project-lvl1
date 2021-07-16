import readlineSync from 'readline-sync';
import { getRandomNumber, mathematicalOperation, checkAnswer } from '../utils.js';

const rules = 'What is the result of the expression?';

const calcGame = () => {
  const operations = ['+', '-', '*'];
  const firstNum = getRandomNumber(20);
  const secodNum = getRandomNumber(10);
  const operationsIndex = getRandomNumber(2, 0);

  console.log(`Question: ${firstNum} ${operations[operationsIndex]} ${secodNum}`);
  const userAnswer = readlineSync.question('Your answer: ');

  const rightAnswer = mathematicalOperation(operations[operationsIndex], firstNum, secodNum);
  const result = checkAnswer(rightAnswer, userAnswer, 'num');
  return result;
};

export { calcGame, rules };
