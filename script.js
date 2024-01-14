let firstOperand = "";
let secondOperand = "";
let currentOperator = null;
let resetScreen = false;


const display=document.querySelector("#display");
const numButtons = document.querySelectorAll(".numButton");
const opButtons =  document.querySelectorAll(".opButton");
const eqButton = document.getElementsByClassName("eqButton")[0];
const clearButton = document.getElementsByClassName("clearButton")[0];

numButtons.forEach(button=>{
    button.addEventListener("click",()=>{
        appendNumber(button.textContent);
    });
});

opButtons.forEach(button => {
    button.addEventListener("click", () => setOperation(button.textContent));
});

eqButton.addEventListener("click", () => compute());
clearButton.addEventListener("click", () => clear());   

function appendNumber(num) {
    if (resetScreen) {
        display.textContent = "";
        resetScreen = false;
    }
    if(display.textContent==="0")
    display.textContent=num;
    else
    display.textContent += num;
}

function setOperation(op) {
    if (currentOperator !== null) compute();
    firstOperand = display.textContent;
    currentOperator = op;
    resetScreen = true;
}

function compute() {
    secondOperand = display.textContent;
    display.textContent = operate(currentOperator, firstOperand, secondOperand);
    currentOperator = null;
}

function clear() {
    display.textContent = "0";
    firstOperand = "";
    secondOperand = "";
    currentOperator = null;
}


function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) return 'Error! Div by 0';
            return a / b;
        default:
            return b;
    }
}