import readlineSync from 'readline-sync';

const getRandomNumber = (num) => Math.floor((Math.random() * num) + 1);

const gameInit = (aboutGame, getQuestion, getRightAnswer) => {
  let countRounds = 3;
  let rightAnswer = null;
  let lastUserAnswer = null;
  let userName = '';

  const getName = () => {
    userName = readlineSync.question('May I have your name? ');
    console.log(`Hi ${userName}!`);
  };

  const getAnswerUser = () => {
    lastUserAnswer = readlineSync.question('Your answer: ');
  };

  const isCorrectAnswer = () => {
    countRounds -= 1;
    console.log('Correct!');
  };

  const isFailAnswer = () => {
    console.log(`'${lastUserAnswer}' is wrong answer;(. Correct answer was '${rightAnswer}'.)`);
    console.log(`Let's try again, ${userName}`);
  };

  const checkAnswer = () => {
    if (rightAnswer === lastUserAnswer) {
      isCorrectAnswer();
      return true;
    }
    isFailAnswer();
    return false;
  };

  const play = () => {
    getName();
    console.log(aboutGame);

    do {
      getQuestion();
      rightAnswer = getRightAnswer();
      getAnswerUser();
      if (!checkAnswer()) break;
    } while (countRounds > 0);

    if (countRounds === 0) {
      console.log(`Congratulations, ${userName}!`);
    }
  };

  play();
};

export { gameInit, getRandomNumber };
