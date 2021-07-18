import readlineSync from 'readline-sync';

const countRounds = 3;

const gameInit = (rules, game) => {
  let counter = countRounds;
  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hi ${userName}!`);
  console.log(rules);

  do {
    const [question, rightAnswer] = game();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (rightAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer;(. Correct answer was '${rightAnswer}'.)`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    counter -= 1;
    console.log('Correct!');
  } while (counter > 0);

  console.log(`Congratulations, ${userName}!`);
};

export default gameInit;
