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
