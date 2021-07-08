import readlineSync from 'readline-sync';

export default (question) => {
  const userName = readlineSync.question(question);
  console.log(`Hi ${userName}!`);
};
