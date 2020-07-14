let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }    
}

const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
})

const operators = document.querySelectorAll(".operator");

const inputOperator = (operator) => {
    prevNumber = currentNumber;
    calculationOperator = operator;
    currentNumber = '';
}

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const equalSign = document.querySelector('.equal-sign');

const calculate = () => {
    let result = '';
    switch (calculationOperator) {
        case "+":
            result = prevNumber + currentNumber;
            break;
        case "-":
            result = prevNumber - currentNumber;
            break;
        case "*":
            result = prevNumber * currentNumber;
            break;
        case "/":
            result = prevNumber / currentNumber;
            break;     
        default:
            break;
    }
    currentNumber = result;
    calculationOperator = '';
}

equalSign.addEventListener('click', () => {
    console.log('equal button is pressed')
})