'use strict';

let secreteNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when guess is not equal
  if (!guess) {
    document.querySelector('.message').textContent = '🚫No Number';
    //when guess is equal
  } else if (guess === secreteNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secreteNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //when guess is wrong
  } else if (guess !== secreteNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secreteNumber ? '☝️Too High' : '👇Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😒You lose the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
//when guess is greater
//   else if (guess > secreteNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '☝️Too High';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '😒You lose the game';
//       document.querySelector('.score').textContent = 0;
//     } //when guess is lower
//   } else if (guess < secreteNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '👇Too Low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '😒You lose the game';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secreteNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
