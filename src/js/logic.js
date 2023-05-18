let displayValue = "";

function clearDisplay() {
  displayValue = "";
  updateDisplay();
}

function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (displayValue.endsWith('*') || displayValue.endsWith('/') || displayValue.endsWith('+') || displayValue.endsWith('-')) {
    displayValue = displayValue.slice(0, -1); // Remove the last operator if it exists
  }
  displayValue += operator;
  updateDisplay();
}

function calculate() {
  if (displayValue.endsWith('*') || displayValue.endsWith('/') || displayValue.endsWith('+') || displayValue.endsWith('-')) {
    displayValue = displayValue.slice(0, -1); // Remove the last operator if it exists
  }
  let result = eval(displayValue);
  displayValue = result.toString();
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").value = displayValue;
}
