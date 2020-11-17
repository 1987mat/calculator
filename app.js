// Variables declarations
const numButtons = document.querySelectorAll('.number');
const opButtons = document.querySelectorAll('.operation');
const display = document.querySelector('.display');
const decimal = document.querySelector('.decimal');
const equals = document.querySelector('.equals');
const clearBtn = document.querySelector('.clear');
const backSpace = document.querySelector('img');

let opClicked; 
let firstOperand;
let secondOperand;
let result;

// Empty array used to store all the numbers, decimals and operators 
let resultArray = [];

// Event listeners
numButtons.forEach(number => {
    number.addEventListener('click', clickNumber);
});

opButtons.forEach(operator => {
    operator.addEventListener('click', clickOperator);
});

decimal.addEventListener('click', function(e) {

    let decimalClicked  = e.target.textContent;

    if (display.textContent.includes('.')) {
        decimal.disabled = true;

    } else {
        resultArray.push(decimalClicked);
        display.textContent += decimalClicked;
    }   
});

equals.addEventListener('click', equalSign);

backSpace.addEventListener('click', function() {

    if (display.textContent !== 0 && display.textContent.length >= 2) {

        display.textContent = display.textContent.slice(0, display.textContent.length - 1);

    } else {

        display.textContent = '0';
    }
});

function clickNumber(e){
    numClicked = e.target.textContent;
    
    if (display.textContent === '0' || resultArray.length == 0) {
        display.textContent = '';

    } else if (resultArray[resultArray.length - 1] === opClicked){   
        display.textContent = '';
    } 
    
    resultArray.push(numClicked);
    display.textContent += numClicked
}

// Set the result as the first and only element of the resultArray
function empty(){
    if (parseFloat(result)!= 0 && resultArray.length == 0) {
        resultArray[0] = result;
    }
}

function clickOperator(e) {

    empty();

    opClicked = e.target.textContent;
    resultArray.push(opClicked);

    if (resultArray[resultArray.length - 1] === opClicked) {

        resultArray[resultArray.length - 1] = opClicked;
    }

    operate();
    console.log(resultArray)
}

// Calculate function when the user clicks an operator
function operate() {
    resultArray.forEach(function (element, index) {
        if (isNaN(parseInt(element)) && element != '.' && index != resultArray.length - 1) {
            firstOperand = resultArray.splice(0,index).join('');
            secondOperand = resultArray.splice(1,resultArray.length - 2).join('');
            if (element === '+') {
                result = add(firstOperand, secondOperand);
            } else if (element === '-') {
                result = subtract(firstOperand, secondOperand);
            } else if (element === '*') {
                result = multiply(firstOperand, secondOperand);
            } else {
                result = divide(firstOperand, secondOperand);
            }
            resultArray[0] = result;
            display.textContent = result;
        }
    })
}
// Equals sign
function equalSign() {

    if (resultArray.length === 0 || isNaN(resultArray[resultArray.length - 1]) ) {

        alert('Error');
        resultArray.splice(0);
        display.textContent = '0';
    
    } else {

        resultArray.forEach(function (element, index) {

            if (isNaN(parseInt(element)) && element != '.' && index) {

                firstOperand = (resultArray.splice(0, index).join(''));
                secondOperand = (resultArray.splice(1).join(''));

                if (element === '+') {
                    result = add(firstOperand, secondOperand);

                } else if (element === '-') {
                    result = subtract(firstOperand, secondOperand);
                } else if (element === '*') {
                    result = multiply(firstOperand, secondOperand);
                } else {
                    result = divide(firstOperand, secondOperand);
                
                }
                display.textContent = result;
                resultArray.splice(0);
                console.log(resultArray)
            }
        })
    }
}

// Functions add, subtract, mutliply and divide

function add(){
    return parseFloat(firstOperand) + parseFloat(secondOperand);
}

function subtract(){
    return parseFloat(firstOperand) - parseFloat(secondOperand);    
}

function multiply(){
    
    return parseFloat(firstOperand) * parseFloat(secondOperand);   
}

function divide(){

    if (secondOperand == 0) {

        alert('Don\' t divide by 0...loser!');
        
    } else {

        return parseFloat(firstOperand) / parseFloat(secondOperand);
    }
}

// Clear display
clearBtn.onclick = () => {
    resultArray.splice(0);
    display.textContent = '0';
}

// Keydown event listeners
window.addEventListener('keydown', checkKeyDown);

function checkKeyDown(e) {

    let keyPressed = e.which;
    // Press 0-9
    switch (keyPressed) {
        case 48:
        numClicked = '0';
        if (display.textContent === '0' || resultArray.length == 0) {
            display.textContent = '';

        } else if (resultArray[resultArray.length - 1] === opClicked) {
            display.textContent = '';
        }

        resultArray.push(numClicked);
        display.textContent += numClicked;
        break;

        case 49:
        numClicked = '1';
        if (display.textContent === '0' || resultArray.length == 0) {
            display.textContent = '';

        } else if (resultArray[resultArray.length - 1] === opClicked) {
            display.textContent = '';
        }
        resultArray.push(numClicked);
        display.textContent += numClicked;
        break;

        case 50:
        numClicked = '2';
        if (display.textContent === '0' || resultArray.length == 0) {
            display.textContent = '';

        } else if (resultArray[resultArray.length - 1] === opClicked) {
            display.textContent = '';
        }
        resultArray.push(numClicked);
        display.textContent += numClicked;
        break;

        case 51:
        numClicked = '3';
        if (display.textContent === '0' || resultArray.length == 0) {
            display.textContent = '';

        } else if (resultArray[resultArray.length - 1] === opClicked) {
            display.textContent = '';
        }
        resultArray.push(numClicked);
        display.textContent += numClicked;
        break;

        case 52:
        numClicked = '4';
        if (display.textContent === '0' || resultArray.length == 0) {
            display.textContent = '';

        } else if (resultArray[resultArray.length - 1] === opClicked) {
            display.textContent = '';
        }
        resultArray.push(numClicked);
        display.textContent += numClicked;
        break;

        case 53:
        numClicked = '5';
        if (display.textContent === '0' || resultArray.length == 0) {
            display.textContent = '';

        } else if (resultArray[resultArray.length - 1] === opClicked) {
            display.textContent = '';
        }
        resultArray.push(numClicked);
        display.textContent += numClicked;
        break;

        case 54:
        numClicked = '6';
        if (display.textContent === '0' || resultArray.length == 0) {
            display.textContent = '';

        } else if (resultArray[resultArray.length - 1] === opClicked) {
            display.textContent = '';
        }
        resultArray.push(numClicked);
        display.textContent += numClicked;
        break;

        case 55:
        numClicked = '7';
        if (display.textContent === '0' || resultArray.length == 0) {
            display.textContent = '';

        } else if (resultArray[resultArray.length - 1] === opClicked) {
            display.textContent = '';
        }
        resultArray.push(numClicked);
        display.textContent += numClicked;
        break;

        case 56:
        numClicked = '8';
        if (display.textContent === '0' || resultArray.length == 0) {
            display.textContent = '';

        } else if (resultArray[resultArray.length - 1] === opClicked) {
            display.textContent = '';
        }
        resultArray.push(numClicked);
        display.textContent += numClicked;
        break;

        case 57:
        numClicked = '9';
        if (display.textContent === '0' || resultArray.length == 0) {
            display.textContent = '';

        } else if (resultArray[resultArray.length - 1] === opClicked) {
            display.textContent = '';
        }
        resultArray.push(numClicked);
        display.textContent += numClicked;
        break;   
    }
    // Press operators
    if (keyPressed == 187) {
        empty();

        opClicked = '+';
        resultArray.push(opClicked);

        if (resultArray[resultArray.length - 1] === opClicked) {

            resultArray[resultArray.length - 1] = opClicked;
        }
        operate();
        
    } else if (keyPressed == 88) {
        empty();

        opClicked = '*';
        resultArray.push(opClicked);

        if (resultArray[resultArray.length - 1] === opClicked) {

            resultArray[resultArray.length - 1] = opClicked;
        }
        operate();
    } else if (keyPressed == 191) {
        empty();

        opClicked = '÷';
        resultArray.push(opClicked);

        if (resultArray[resultArray.length - 1] === opClicked) {

            resultArray[resultArray.length - 1] = opClicked;
        }

        operate();

    } else if (keyPressed == 189) {
        empty();

        opClicked = '-';
        resultArray.push(opClicked);

        if (resultArray[resultArray.length - 1] === opClicked) {

            resultArray[resultArray.length - 1] = opClicked;
        }

        operate();
    }
    // Press decimal key
    if (keyPressed == 190) {
        let decimalClicked = '.';

        if (display.textContent.includes('.')) {
            decimal.disabled = true;

        } else {
            resultArray.push(decimalClicked);
            display.textContent += decimalClicked;
        }
    }
    // Press backspace/delete key
    if (keyPressed == 8) {
        if (display.textContent !== 0 && display.textContent.length >= 2) {
            display.textContent = display.textContent.slice(0, display.textContent.length - 1);
        } else {
            display.textContent = '0';
        }
    }
    // Press equals sign
    if (keyPressed == 13) {
        equalSign();
    }
    // Clear all
    if (keyPressed == 67) {
        resultArray.splice(0);
        display.textContent = '0';
    }    
}

        
    

  

   


