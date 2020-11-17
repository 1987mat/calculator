const numberButtons = document.querySelectorAll('.button');
const operationButtons = document.querySelectorAll('.operation');
const display = document.querySelector('.display');

const equals = document.querySelector('.equals');
const clearBtn = document.querySelector('.clear');


let displayValue;

let numbers;
let num1;
let num2;


// Listen for event when click on a number
numberButtons.forEach(numberBtn => {
    numberBtn.addEventListener('click', updateDisplay);  
});


// Listen for event click when click on the equal button
equals.addEventListener('click', operate);




function updateDisplay(e){

    let displayValue = e.target.textContent;

    if(display.textContent === '0'){

        display.textContent= '';      

    }

    display.textContent += displayValue;   

}


function operate() {

   if (display.textContent.includes('+')) {

        numbers = display.textContent.split('+');

        num1 = parseInt(numbers[0]);
        num2 = parseInt(numbers[1]);

        add(num1, num2);

        // Update the display value
        display.textContent = add();

    } else if (display.textContent.includes('-')) {

        numbers = display.textContent.split('-');
        num1 = parseInt(numbers[0]);
        num2 = parseInt(numbers[1]);

        subtract(num1, num2);

        // Update the display value
        display.textContent = subtract();

    } else if (display.textContent.includes('*')) {

        numbers = display.textContent.split('*');
        num1 = parseInt(numbers[0]);
        num2 = parseInt(numbers[1]);

        multiply(num1, num2);

        // Update the display value
        display.textContent = multiply();

    } else if (display.textContent.includes('÷')){


        numbers = display.textContent.split('÷');
        num1 = parseInt(numbers[0]);
        num2 = parseInt(numbers[1]);

        // Alert if the user divide a number by 0
        if (num2 !== 0) {
            divide(num1, num2);

            // Update the display value
            display.textContent = divide();

        } else {
            alert('Please enter a number other than 0');
            display.textContent = '0';
        }
    }
   
}


function add(){
    return num1 + num2;
}

function subtract(){
    return num1 - num2;
}


function multiply(){
    return num1 * num2;
}

function divide(){
    return num1 / num2;
}



// Clear display
clearBtn.onclick = () => {
    display.textContent = '0';
}
