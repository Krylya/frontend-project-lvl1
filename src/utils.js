// случайное число
const getRandomNumber = (minNum = 1, maxNum = 100) => Math.floor((Math.random() * maxNum) + minNum);

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

export { getRandomNumber, mathematicalOperation };
