const passworBox = document.getElementById('password');
const password_length = document.getElementById('password_length');
let length = 0;
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
function passwordLength() {
  return password_length.value;
}

btn.addEventListener('click', function () {
  length = passwordLength();
  if (length < 8) {
    length = 8;
  }
  createPassword();
});

function copyPassword() {
  passworBox.select();
  document.execCommand('copy');
}

copyImg.addEventListener('click', function () {
  copyPassword();
});
