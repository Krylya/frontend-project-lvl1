import readlineSync from "readline-sync";

export const getUserName = (question) => {
    const userName = readlineSync.question(question);
    console.log('Hi ' + userName + '!');
}
