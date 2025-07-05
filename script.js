// === Calculator Functions ===
let expression = "";

function append(value) {
  expression += value;
  document.getElementById("display").innerText = expression;
}

function clearDisplay() {
  expression = "";
  document.getElementById("display").innerText = "0";
}

function calculate() {
  try {
    const result = eval(expression);
    document.getElementById("display").innerText = result;
    expression = result.toString();
  } catch {
    document.getElementById("display").innerText = "Error";
    expression = "";
  }
}

// === Number Base Converter ===
function convert() {
  const base = parseInt(document.getElementById("inputBase").value);
  const input = document.getElementById("inputValue").value.trim();

  let number;
  try {
    number = parseInt(input, base);
    if (isNaN(number)) throw new Error("Invalid number");
  } catch {
    alert("Invalid input number for the selected base.");
    return;
  }

  document.getElementById("bin").innerText = number.toString(2);
  document.getElementById("dec").innerText = number.toString(10);
  document.getElementById("oct").innerText = number.toString(8);
  document.getElementById("hex").innerText = number.toString(16).toUpperCase();
}

// === Text to Binary/Decimal/Hex Converter ===
function convertText() {
  const text = document.getElementById("textInput").value;
  let binary = "", decimal = "", hex = "";

  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    binary += code.toString(2).padStart(8, '0') + " ";
    decimal += code.toString(10) + " ";
    hex += code.toString(16).toUpperCase().padStart(2, '0') + " ";
  }

  document.getElementById("textBin").innerText = binary.trim();
  document.getElementById("textDec").innerText = decimal.trim();
  document.getElementById("textHex").innerText = hex.trim();
}
