import gameInit from '../index.js';
import getRandomNumber from '../utils.js';

// прогрессия
const progressionGame = () => {
  const aboutGame = 'What number is missing in the progression?';
  const progressionLength = 10;
  let firstNum = getRandomNumber(10);
  let deltaNum = getRandomNumber(5);
  let emptyNum = getRandomNumber(10);

  const getQuestion = () => {
    firstNum = getRandomNumber(10);
    deltaNum = getRandomNumber(5);
    emptyNum = getRandomNumber(9);

    let result = '';
    for (let i = 0; i < progressionLength; i += 1) {
      if (i === emptyNum) {
        result += '.. ';
      } else {
        result += firstNum + deltaNum * i;
        result += ' ';
      }
    }

    console.log(`Question: ${result}`);
  };

  const getRightAnswer = () => {
    const answerNum = firstNum + deltaNum * emptyNum;
    return String(answerNum);
  };

  gameInit(aboutGame, getQuestion, getRightAnswer);
};

export default progressionGame;
