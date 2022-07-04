operator = ['+', '-', '*', '/'];

let displayValue = '';

add = function(num1, num2) {
  let result = Number(num1) + Number(num2);
  console.log(result);
  display.textContent = result;
}

subtract = function(num1, num2) {
  let result = Number(num1) - Number(num2);
  console.log(result);
  display.textContent = result;
}

multiply = function(num1, num2) {
  let result = Number(num1) * Number(num2);
  console.log(result);
  display.textContent = result;
}

divide = function(num1, num2) {
  let result = Number(num1) / Number(num2);
  console.log(result);
  display.textContent = result;
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

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
  display.textContent = '' ;
  displayValue = display.textContent;
});

const zero = document.querySelector('.zero');
zero.addEventListener('click', () => {
  if (display.textContent.length < 7){
    display.textContent += '0';
    displayValue = display.textContent;
  }
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

const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', () => {
  display.textContent += '+';
  displayValue = display.textContent;
});

const subtractBtn = document.querySelector('.subtract');
subtractBtn.addEventListener('click', () => {
  display.textContent += '-';
  displayValue = display.textContent;
});

const divideBtn = document.querySelector('.multiply');
divideBtn.addEventListener('click', () => {
  display.textContent += '*';
  displayValue = display.textContent;
});

const multiplyBtn = document.querySelector('.divide');
multiplyBtn.addEventListener('click', () => {
  display.textContent += '/' ;
  displayValue = display.textContent;
});

const equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
  displayValue = display.textContent;
  for (let i in operator){
    displayValue = displayValue.replace(operator[i], replaceOperator(operator[i]));
  }
  let displayArr = displayValue.split(' ');
  displayArr.forEach((elem) => {
    if (operator.includes(elem) == true){
      let operatorIndex = displayArr.indexOf(elem);
      operate(displayArr[operatorIndex-1], displayArr[operatorIndex+1], elem);
    }
  });
});

replaceOperator = function(op) {
  switch(op){
    case '+': return ' + ';
      break;
    case '-': return ' - ';
      break;
    case '*': return ' * ';
      break;
    case '/': return ' / ';
      break;
  }
}