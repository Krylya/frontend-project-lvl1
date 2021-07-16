// случайное число
const getRandomNumber = (maxNum, minNum = 1) => Math.floor((Math.random() * maxNum) + minNum);

// математическкие операции
const mathematicalOperation = (operation, operand1, operand2) => {
  let right = '';
  switch (operation) {
    case '+':
      right = operand1 + operand2;
      break;
    case '-':
      right = operand1 - operand2;
      break;
    case '*':
      right = operand1 * operand2;
      break;
    default:
      break;
  }

  return right;
};

// Проверка правильного ответа
const checkAnswer = (rightAnswer, userAnswer, type = 'str') => {
  let usaranswer = userAnswer;
  if (type === 'num') {
    usaranswer = +userAnswer;
  }

  if (usaranswer !== rightAnswer) {
    console.log(`'${userAnswer}' is wrong answer;(. Correct answer was '${rightAnswer}'.)`);
    return false;
  }
  return true;
};

export { getRandomNumber, mathematicalOperation, checkAnswer };
