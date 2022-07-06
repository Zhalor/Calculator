operator = ['+', '-', '*', '/'];

let displayValue = '';

add = function(num1, num2) {
  let result = Number(num1) + Number(num2);
  if (result > 0) {
    return Math.round(result * 100) / 100;
  } else {
    return Math.floor(Math.abs(result) * 100) * -1 / 100 
  }
}

subtract = function(num1, num2) {
  let result = Number(num1) - Number(num2);
  if (result > 0) {
    return Math.round(result * 100) / 100;
  } else {
    return Math.floor(Math.abs(result) * 100) * -1 / 100 
  }
}

multiply = function(num1, num2) {
  let result = Number(num1) * Number(num2);
  if (result > 0) {
    return Math.round(result * 100) / 100;
  } else {
    return Math.floor(Math.abs(result) * 100) * -1 / 100 
  }
}

divide = function(num1, num2) {
  let result = Number(num1) / Number(num2);
  if (result > 0) {
    return Math.round(result * 100) / 100;
  } else {
    return Math.floor(Math.abs(result) * 100) * -1 / 100 
  }
}

operate = function(num1, num2, op) {
  switch(op){
    case '+': return add(num1, num2);
    case '-': return subtract(num1, num2);
    case '*': return multiply(num1, num2);
    case '/': return divide(num1, num2);
  }
}

const display = document.querySelector('#display');

document.body.addEventListener('keypress', (event) => {
  if (!Number.isNaN(Number(event.key)) || operator.includes(event.key)){
    display.textContent += event.key;
    displayValue = display.textContent;
  }
})

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
  if (!display.textContent.includes('.')){
    display.textContent += '.';
    displayValue = display.textContent;
  }
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
    displayValue = displayValue.replaceAll(operator[i], replaceOperator(operator[i]));
  }
  let displayArr = displayValue.split(' ');
  while ((displayArr.length) > 1){
    if (operator.includes(displayArr[1]) && !displayArr.includes('')){
      num = operate(displayArr[0], displayArr[2], displayArr[1]);
      displayArr.splice(0, 3, num);
    }
  }
  if (displayArr[0] === Infinity){
    display.textContent = 'Uh, no.';
  displayValue = '';
  } else {
    display.textContent = displayArr[0];
    displayValue = display.textContent;
  }
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