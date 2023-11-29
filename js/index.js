function runPart1() {
  let userName = prompt("Hello! What is your name?", "");

  if (userName === null || userName === "") {
    alert("Canceled or nothing entered. Try again.");
  } else {
    alert("Hello, " + userName + "! How are you?");
  }
}

function runPart2() {
  let firstArg = askForNumber("Enter the first argument:");

  let operation = prompt("Enter the operation (+, -, *, /):");
  if (
    operation !== "+" &&
    operation !== "-" &&
    operation !== "*" &&
    operation !== "/"
  ) {
    alert("Invalid input. Possible values: +, -, *, or /. Please try again.");
  } else {
    let secondArg = askForNumber("Enter the second argument:");

    switch (operation) {
      case "+":
        alert("Result: " + (firstArg + secondArg));
        break;
      case "-":
        alert("Result: " + (firstArg - secondArg));
        break;
      case "*":
        alert("Result: " + firstArg * secondArg);
        break;
      case "/":
        if (secondArg !== 0) {
          alert("Result: " + firstArg / secondArg);
        } else {
          alert("Error: division by zero is not possible.");
        }
        break;
      default:
        alert("Unknown operation.");
        break;
    }
  }
}

function runPart3() {
  let firstArg = prompt("Enter the first argument:");
  if (firstArg === null) {
    showCanceledAlert();
    return;
  }
  let secondArg = prompt("Enter the second argument:");
  if (secondArg === null) {
    showCanceledAlert();
    return;
  }
  if (firstArg === secondArg) alert("true");
  else alert("false");
}

function runPart4() {
  let arg = +prompt("Enter the first argument:");
  if (
    !arg ||
    isNaN(arg) ||
    !Number.isInteger(Number(arg)) ||
    (arg.toString().length !== 5 && arg.toString().length !== 6) ||
    (arg[0] === "0" && arg[1] !== "-")
  ) {
    alert("Bad value. Not a number. Please try again.");
    return;
  }
  let digits = [];
  let isNegative = false;

  if (arg < 0) {
    isNegative = true;
    arg = Math.abs(arg);
  }

  for (let i = 0; i < 5; i++) {
    let digit = arg % 10;
    digits.push(digit);
    arg = Math.floor(arg / 10);
  }

  digits.reverse();
  alert((isNegative ? "-" : "") + digits.join(" "));
}

//helper
function askForNumber(promptMessage) {
  let input = prompt(promptMessage);
  if (input === null) {
    showCanceledAlert();
    input = askForNumber(promptMessage);
  }
  let inputNum = Number(input);
  if (!isValidNumber(inputNum)) {
    alert("Bad value. Please try again.");
    return askForNumber(promptMessage);
  }
  return inputNum;
}

function isValidNumber(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}

function showCanceledAlert() {
  alert("Canceled or nothing entered");
}
