operator = ['+', '-', '*', '/'];

let displayArr = [];

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

addBtnPress = function() {
  if (!display.textContent == ''){
    displayArr.push(display.textContent, '+');
    display.textContent = '' ;
  }
}

subtractBtnPress = function() {
  if (!display.textContent == ''){
    displayArr.push(display.textContent, '-');
    display.textContent = '' ;
  }
}

multiplyBtnPress = function() {
  if (!display.textContent == ''){
    displayArr.push(display.textContent, '*');
    display.textContent = '' ;
  }
}

divideBtnPress = function() {
  if (!display.textContent == ''){
    displayArr.push(display.textContent, '/');
    display.textContent = '' ;
  }
}

let calcResult = function() {
  if (display.textContent != '' && displayArr.length > 0){
    displayArr.push(display.textContent);
  }
  while ((displayArr.length) > 1){
    if (operator.includes(displayArr[1]) && !displayArr.includes('') && displayArr.length % 2 === 1){
      num = operate(displayArr[0], displayArr[2], displayArr[1]);
      displayArr.splice(0, 3, num);
    } else {
      return;
    }
  }
  if (displayArr[0] === Infinity){
    display.textContent = 'Uh, no.';
  } else {
    display.textContent = displayArr[0];
    displayArr.splice(0, displayArr.length);
  }
}

const display = document.querySelector('#display');

document.body.addEventListener('keydown', (event) => {
  if (!Number.isNaN(Number(event.key)) && display.textContent.length < 10){
    display.textContent += event.key;
  } else if (operator.includes(event.key)) {
    switch (event.key){
      case '+': addBtnPress();
      case '-': subtractBtnPress();
      case '*': multiplyBtnPress();
      case '/': divideBtnPress();
    } 
  } else if (event.key === 'Enter') {
    calcResult();
  } else if (event.key === '.' && display.textContent.length < 10 && !display.textContent.includes('.')){
    display.textContent += event.key;
  } else if (event.key === 'Backspace'){
    let lengthOfDisplay = display.textContent.length;
    display.textContent = display.textContent.substring(0, lengthOfDisplay - 1);
  }
})

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
  display.textContent = '' ;
  displayArr.splice(0, displayArr.length);
});

const zero = document.querySelector('.zero');
zero.addEventListener('click', () => {
  if (display.textContent.length < 10){
    display.textContent += '0';
  }
});

const one = document.querySelector('.one');
one.addEventListener('click', () => {
  if (display.textContent.length < 10){
    display.textContent += '1';
  }
});

const two = document.querySelector('.two');
two.addEventListener('click', () => {
  if (display.textContent.length < 10){
    display.textContent += '2';
  }
});

const three = document.querySelector('.three');
three.addEventListener('click', () => {
  if (display.textContent.length < 10){
    display.textContent += '3';
  }
});

const four = document.querySelector('.four');
four.addEventListener('click', () => {
  if (display.textContent.length < 10){
    display.textContent += '4';
  }
});

const five = document.querySelector('.five');
five.addEventListener('click', () => {
  if (display.textContent.length < 10){
    display.textContent += '5';
  }
});

const six = document.querySelector('.six');
six.addEventListener('click', () => {
  if (display.textContent.length < 10){
    display.textContent += '6';
  }
});

const seven = document.querySelector('.seven');
seven.addEventListener('click', () => {
  if (display.textContent.length < 10){
    display.textContent += '7';
  }
});

const eight = document.querySelector('.eight');
eight.addEventListener('click', () => {
  if (display.textContent.length < 10){
    display.textContent += '8';
  }
});

const nine = document.querySelector('.nine');
nine.addEventListener('click', () => {
  if (display.textContent.length < 10){
    display.textContent += '9';
  }
});

const dot = document.querySelector('.dot');
dot.addEventListener('click', () => {
  if (!display.textContent.includes('.') && display.textContent.length < 10 ){
    display.textContent += '.';
  }
});

const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', addBtnPress);

const subtractBtn = document.querySelector('.subtract');
subtractBtn.addEventListener('click', subtractBtnPress);

const divideBtn = document.querySelector('.multiply');
divideBtn.addEventListener('click', multiplyBtnPress);

const multiplyBtn = document.querySelector('.divide');
multiplyBtn.addEventListener('click', divideBtnPress);

const equal = document.querySelector('.equal');
equal.addEventListener('click', calcResult);