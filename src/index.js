import readlineSync from 'readline-sync';

let countRounds = 3;
let rightAnswer = null;
let lastUserAnswer = null;
let userName = '';

const operators = ['+', '-', '*'];

const getRandomNumber = (num) => Math.floor((Math.random() * num) + 1);

const getName = () => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
};

const aboutGame = (gameName) => {
  switch (gameName) {
    case 'even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'calc':
      console.log('What is the result of the expression?');
      break;
    case 'nod':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 'progression':
      console.log('What number is missing in the progression?');
      break;
    case 'prime':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      break;
    default:
      break;
  }
};

// четное число
const evenQuestion = () => {
  const randomNum = getRandomNumber(100);
  const isEven = randomNum % 2 === 0;
  rightAnswer = isEven ? 'yes' : 'no';

  console.log(`Question: ${randomNum}`);
};

// калькулятор
const calcQuestion = () => {
  const firstNum = getRandomNumber(20);
  const secodNum = getRandomNumber(10);
  const operatorIndex = Math.floor((Math.random() * operators.length));

  switch (operatorIndex) {
    case 0:
      rightAnswer = firstNum + secodNum;
      break;
    case 1:
      rightAnswer = firstNum - secodNum;
      break;
    case 2:
      rightAnswer = firstNum * secodNum;
      break;
    default:
      break;
  }
  console.log(`${firstNum} ${operators[operatorIndex]} ${secodNum}`);
};

// общий знаменатель
const nodQuestion = () => {
  const firstNum = getRandomNumber(100);
  const secodNum = getRandomNumber(100);

  const gcd = (a, b) => {
    if (!b) {
      return a;
    }
    return gcd(b, a % b);
  };

  rightAnswer = gcd(firstNum, secodNum);
  console.log(firstNum, ' ', secodNum);
};

// прогрессия
const progressionQuestion = () => {
  const progressionLength = 11;
  const firstNum = getRandomNumber(10);
  const deltaNum = getRandomNumber(3);
  const emptyNum = getRandomNumber(10);

  let result = '';
  for (let i = 1; i < progressionLength; i += 1) {
    if (i === emptyNum) {
      result += '.. ';
    } else {
      result += firstNum + deltaNum * i;
      result += ' ';
    }
  }

  rightAnswer = firstNum + deltaNum * emptyNum;
  console.log(result);
};

// Простое ли число
const primeQuestion = () => {
  const num = getRandomNumber(20);
  const stringFromNum = String(num);

  if (stringFromNum.length > 1) {
    rightAnswer = 'no';
  } else {
    rightAnswer = 'yes';
  }

  console.log(num);
};

const answerUser = () => {
  lastUserAnswer = readlineSync.question('Your answer: ');
};

const correctAnswer = () => {
  countRounds -= 1;
  console.log('Correct!');
};

const failAnswer = () => {
  countRounds = 3;
  console.log(`'${lastUserAnswer}' is wrong answer;(. Correct answer was '${rightAnswer}'.\n
     Let's try again, Bill!`);
};

const checkAnswer = (gameName) => {
  // для получения числа из строки
  if (gameName === 'calc' || gameName === 'nod' || gameName === 'progression') {
    lastUserAnswer = +lastUserAnswer;
  }

  if (rightAnswer === lastUserAnswer) {
    correctAnswer();
  } else {
    failAnswer();
  }
};

// сбрасываем значения
const resetGame = () => {
  countRounds = 3;
  rightAnswer = null;
  lastUserAnswer = null;
  userName = '';
};

const game = (gameName) => {
  getName();
  aboutGame(gameName);

  do {
    switch (gameName) {
      case 'even':
        evenQuestion();
        break;
      case 'calc':
        calcQuestion();
        break;
      case 'nod':
        nodQuestion();
        break;
      case 'progression':
        progressionQuestion();
        break;
      case 'prime':
        primeQuestion();
        break;
      default:
        break;
    }

    answerUser();
    checkAnswer(gameName);
  } while (countRounds > 0);

  console.log(`Congratulations, ${userName}!`);
  resetGame();
};

export default game;
