import readlineSync from 'readline-sync';

const gameInit = (rules, game) => {
  let countRounds = 3;
  let userName = '';

  userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  console.log(rules);

  do {
    if (!game()) {
      console.log(`'${lastUserAnswer}' is wrong answer;(. Correct answer was '${rightAnswer}'.)`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    countRounds -= 1;
    console.log('Correct!');
  } while (countRounds > 0);

  if (countRounds === 0) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default gameInit;
