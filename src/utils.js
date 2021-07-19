// случайное число
const getRandomNumber = (minNum = 1, maxNum = 100) => Math.floor((Math.random() * maxNum) + minNum);

export default getRandomNumber;
