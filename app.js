const passworBox = document.getElementById('password');
const length = 15;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '!@#$%^&*(){}[]:">?><?-+=';

const allChars = upperCase + lowerCase + number + symbol;
const btn = document.querySelector('.container button');
const copyImg = document.querySelector('.container img');

function createPassword() {
  let password = '';
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passworBox.value = password;
}

btn.addEventListener('click', function () {
  createPassword();
});

function copyPassword() {
  passworBox.select();
  document.execCommand('copy');
}

copyImg.addEventListener('click', function () {
  copyPassword();
});
