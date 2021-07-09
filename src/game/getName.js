import readlineSync from 'readline-sync';

export default (question) => {
  const userName = readlineSync.question(question);
  return userName;
  // console.log(`Hi ${userName}!`);
};
