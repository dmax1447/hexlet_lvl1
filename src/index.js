import readlineSync from 'readline-sync';

function getUserName() {
  console.log('Welcome to Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
}

export default getUserName;
