let firstNumber=null, secondNumber=null, operand='';

const realTimeDisplay = document.getElementById("real-time-display");
const firstNumberDisplay = document.getElementById("first-number-display");
const operandDisplay = document.getElementById("operand-display");
const secondNumberDisplay = document.getElementById("second-number-display");
const resultDisplay = document.getElementById("result-display");

const numberButtons = document.querySelectorAll(".number");
const operandButtons = document.querySelectorAll(".operand");

const clearButton=document.querySelector('#clear');
const deleteButton=document.querySelector('#delete');
const decimalButton=document.querySelector('#decimal');
const equalsButton=document.querySelector('#equals');

numberButtons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        if(operand==''){
            firstNumberDisplay.textContent+=button.id;
        } else {
            secondNumberDisplay.textContent+=button.id;
        }
    })
});

operandButtons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        defineDisplay();
        if(secondNumberDisplay.textContent!=''){
            //console.log(firstNumber, secondNumber, operand);
            resultDisplay.textContent=evaluate(firstNumber, secondNumber, operand);
            firstNumberDisplay.textContent=resultDisplay.textContent;
            operand=button.id;
            operandDisplay.textContent=button.textContent;
            secondNumberDisplay.textContent='';
        } else if(operandDisplay.textContent!=''){
            return;
        } else {
            operand=button.id;
            operandDisplay.textContent=button.textContent;
        }
    })
})

equalsButton.addEventListener('click', ()=>{
    defineDisplay();
    resultDisplay.textContent=evaluate(firstNumber, secondNumber, operand);
})

clearButton.addEventListener('click', clearAll);

function clearAll(){
    firstNumber=null;
    secondNumber=null;
    operand='';
    firstNumberDisplay.textContent='';
    secondNumberDisplay.textContent='';
    operandDisplay.textContent='';
    resultDisplay.textContent='';
}

function defineDisplay(){
    firstNumber = Number(firstNumberDisplay.textContent);
    secondNumber = Number(secondNumberDisplay.textContent);
}

//the mathematical functions

function add(num1, num2){
    return(num1 + num2);
}

function detract(num1, num2){
    return(num1 - num2);
}

function multiply(num1, num2){
    return(num1*num2);
}

function divide(num1, num2){
    if(num2==0){
        alert("No division by zero!");
        return
    } else {
        return((num1/num2).toFixed(2));
    }
}

function evaluate(num1, num2, operand){
    switch(operand){
        case "plus":
            return(add(num1, num2));
        case "minus":
            return(detract(num1, num2));
        case "multiply":
            return(multiply(num1, num2));
        case "divide":
            return(divide(num1, num2));
    }
}

clearAll();