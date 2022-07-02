add = function(num1, num2) {
  console.log(num1 + num2);
}

subtract = function(num1, num2) {
  console.log(num1 - num2);
}

multiply = function(num1, num2) {
  console.log(num1 * num2);
}

divide = function(num1, num2) {
  console.log(num1 / num2);
}

operate = function(num1, num2, op) {
  switch(op){
    case '+': add(num1, num2);
      break;
    case '-': subtract(num1, num2);
      break;
    case '*': multiply(num1, num2);
      break;
    case '/': divide(num1, num2);
      break;
  }
}

const display = document.querySelector('#display');

const zero = document.querySelector('.zero');
zero.addEventListener('click', () => {
  display.textContent += '0';
  displayValue = display.textContent;
});

const one = document.querySelector('.one');
one.addEventListener('click', () => {
  display.textContent += '1';
  displayValue = display.textContent;
});

const two = document.querySelector('.two');
two.addEventListener('click', () => {
  display.textContent += '2';
  displayValue = display.textContent;
});

const three = document.querySelector('.three');
three.addEventListener('click', () => {
  display.textContent += '3';
  displayValue = display.textContent;
});

const four = document.querySelector('.four');
four.addEventListener('click', () => {
  display.textContent += '4';
  displayValue = display.textContent;
});

const five = document.querySelector('.five');
five.addEventListener('click', () => {
  display.textContent += '5';
  displayValue = display.textContent;
});

const six = document.querySelector('.six');
six.addEventListener('click', () => {
  display.textContent += '6';
  displayValue = display.textContent;
});

const seven = document.querySelector('.seven');
seven.addEventListener('click', () => {
  display.textContent += '7';
  displayValue = display.textContent;
});

const eight = document.querySelector('.eight');
eight.addEventListener('click', () => {
  display.textContent += '8';
  displayValue = display.textContent;
});

const nine = document.querySelector('.nine');
nine.addEventListener('click', () => {
  display.textContent += '9';
  displayValue = display.textContent;
});

const dot = document.querySelector('.dot');
dot.addEventListener('click', () => {
  display.textContent += '.';
  displayValue = display.textContent;
});