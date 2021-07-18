import { getRandomNumber } from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeGame = () => {
  const num = getRandomNumber(1, 20);
  console.log(`Question: ${num}`);

  const getRightAnswer = () => {
    if (num === 1) return 'yes';
    if (num === 0) return 'no';

    let isSimply = true;

    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) isSimply = false;
    }
    if (isSimply) return 'yes';
    return 'no';
  };

  const rightAnswer = getRightAnswer();
  return rightAnswer;
};

export { primeGame, rules };
