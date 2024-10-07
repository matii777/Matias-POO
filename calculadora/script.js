// script.js
let display = document.getElementById("display");
let currentInput = "";
let firstOperand = null; // Primer número
let secondOperand = null; // Segundo número
let operation = null;

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    firstOperand = null;
    secondOperand = null;
    operation = null;
    display.value = "";
}

function setOperation(op) {
    if (currentInput === "") return; // Evitar operaciones sin número
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput); // Guardar el primer número
    } else if (operation) {
        calculateResult(); // Calcular si ya hay una operación
    }
    
    operation = op; // Establecer nueva operación
    currentInput = ""; // Limpiar entrada para el segundo número
}

function calculateResult() {
    if (currentInput === "" || operation === null || firstOperand === null) return; // Validar entrada

    secondOperand = parseFloat(currentInput); // Guardar el segundo número
    
    let result;

    switch (operation) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = secondOperand !== 0 ? firstOperand / secondOperand : "Error"; // Manejo de división por cero
            break;
        default:
            return; // Si no hay operación válida
    }

    display.value = result; // Mostrar resultado

    // Preparar para un nuevo cálculo, pero no limpiar inmediatamente
    firstOperand = result; // Establecer el resultado como primer operando para cálculos posteriores
    currentInput = ""; // Limpiar entrada para nuevo cálculo
}