// Selectăm inputurile, butoanele și secțiunea de rezultat
const num1Input = document.querySelector("#num1");
const num2Input = document.querySelector("#num2");
const resultDiv = document.querySelector("#result");

// Selectăm butoanele
const addButton = document.querySelector("#addBtn");
const subtractButton = document.querySelector("#subtractBtn");

// Funcția pentru adunare
function addNumbers() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  if (!isNaN(num1) && !isNaN(num2)) {
    const sum = num1 + num2;
    resultDiv.innerHTML = `Rezultatul: ${sum}`;
  } else {
    resultDiv.innerHTML = `Te rog să introduci valori valide!`;
  }
}

// Funcția pentru scădere
function subtractNumbers() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  if (!isNaN(num1) && !isNaN(num2)) {
    const difference = num1 - num2;
    resultDiv.innerHTML = `Rezultatul: ${difference}`;
  } else {
    resultDiv.innerHTML = `Te rog să introduci valori valide!`;
  }
}

// Atașăm event listeneri pentru butoane
addButton.addEventListener("click", addNumbers);
subtractButton.addEventListener("click", subtractNumbers);
