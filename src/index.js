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
  }
};

const evenQuestion = () => {
  const randomNum = getRandomNumber(100);
  const isEven = randomNum % 2 === 0;
  rightAnswer = isEven ? 'yes' : 'no';

  console.log(`Question: ${randomNum}`);
};

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
  }
  console.log(`${firstNum} ${operators[operatorIndex]} ${secodNum}`);
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
  switch (gameName) {
    case 'even':
      rightAnswer === lastUserAnswer ? correctAnswer() : failAnswer();
      break;
    case 'calc':
      rightAnswer === +lastUserAnswer ? correctAnswer() : failAnswer();
      break;
  }
};

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
    }

    // console.log('rightAnswer-- ', rightAnswer);
    answerUser();
    checkAnswer(gameName);
  } while (countRounds > 0);

  console.log(`Congratulations, ${userName}!`);
  resetGame();
};

export default game;