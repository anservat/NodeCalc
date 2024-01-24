var rs = require("readline-sync");

function getUserInput(message) {
  return rs.question(message);
}

function getValidNumberInput(message) {
  while (true) {
    var input = getUserInput(message);
    var number = parseFloat(input);
    if (!isNaN(number)) {
      return number;
    }
    console.log("This is not a number");
  }
}

function performOperation(operator, num1, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return "Error -- The reason that the result of a division by zero is undefined is the fact that any attempt at a definition leads to a contradiction.";
      }
    default:
      return "Invalid operation";
  }
}

var  validOperators = ["+", "-", "*", "/"];

function calculator() {
  while (true) {
    var operator = getUserInput("What operation would you like to perform? ");
    if (!validOperators.includes(operator)) {
      console.log("That is not a valid operation");
      continue;
    }

    var firstNumber = getValidNumberInput("Please enter the first number: ");
    var secondNumber = getValidNumberInput("Please enter the second number: ");

    var result = performOperation(operator, firstNumber, secondNumber);
    console.log(`The result is: ${result}`);

    var again = getUserInput(
      "Do you want to perform another calculation? (yes to continue / anything else to log out): "
    );
    
    if (again !== "yes") {
      break;
    }
  }
}

calculator();
