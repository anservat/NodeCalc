var rs = require("readline-sync");

function getUserInput(message) {
  return rs.question(message);
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
        return "Error: Cannot divide by zero";
      }
    default:
      return "Invalid operation";
  }
}

function calculator() {
  var validOperators = ["+", "-", "*", "/"];

  while (true) {
    var operator = getUserInput("What operation would you like to perform? ");
    if (!validOperators.includes(operator)) {
      console.log("That is not a valid operation");
      continue;
    }
    var firstNumberInput = parseFloat(
      getUserInput("Please enter the first number: ")
    );
    if (isNaN(firstNumberInput)) {
      console.log("This is not a number");
      continue;
    }
    var firstNumber = parseFloat(firstNumberInput);
    var secondNumberInput = parseFloat(
      getUserInput("Please enter the second number: ")
    );
    if (isNaN(secondNumberInput)) {
      console.log("This is not a number");
      continue;
    }
    var secondNumber = parseFloat(secondNumberInput);
    var result = performOperation(operator, firstNumber, secondNumber);
    console.log(`The result is: ${result}`);
    var again = getUserInput(
      "Do you want to perform another calculation? (yes to continue / anything else to log out): "
    ).toLowerCase();
    if (again !== "yes") {
      break;
    }
  }
}

calculator();
