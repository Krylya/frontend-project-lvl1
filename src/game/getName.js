import readlineSync from 'readline-sync';
import getName from './getName.js';

let countAnswers = 0;
let lastAnswer = '';
let userName = null;

const getRandomNumber = (num) => Math.floor((Math.random() * num) + 1);

const aboutGame = (text) => {
  console.log(text);
};

const correctAnswer = () => {
  countAnswers += 1;
  console.log('Correct!');
};

const failAnswer = (answer) => {
  countAnswers = 0;
  const rightAnswer = answer === 'yes' ? 'no' : 'yes';
  console.log(`'${answer}' is wrong answer;(. Correct answer was '${rightAnswer}'.\n
     Let's try again, Bill!`);
};

const question = () => {
  const randomNum = getRandomNumber(100);
  const isEven = randomNum % 2 === 0;
  console.log(`Question: ${randomNum}`);

  lastAnswer = readlineSync.question('Your answer: ');
  // eslint-disable-next-line no-mixed-operators
  return (isEven && lastAnswer === 'yes' || !isEven && lastAnswer === 'no');
};

const game = () => {
  console.log('Welcome to the Brain Games!');
  userName = getName('May I have your name? ');
  console.log(`Hello, ${userName}`);
  aboutGame('Answer "yes" if the number is even, otherwise answer "no".');
  do {
    if (question()) {
      correctAnswer();
    } else {
      failAnswer(lastAnswer);
    }
  } while (countAnswers < 3);

  console.log(`Congratulations, ${userName}!`);
};

export default game;
