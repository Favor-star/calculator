'use strict'
let buttonsDiv = document.querySelector('.buttons');
let screenDisply = document.getElementById('current');
let progressDsply = document.getElementById('progress');
let values =[];
let number1;
let number2;
let isSignCalled = false;

// set buttons from 1-9
let count = 1;
for(let  i = 0; i < 10; i++){
    let numbers = document.createElement('button');
numbers.setAttribute('class', 'numbers');
numbers.setAttribute('id', 'number-'+count);
numbers.textContent = count;
numbers.addEventListener("click",takeNumbers);
numbers.addEventListener("click",displayNumbers);
count++;
if(i === 9){
    numbers.textContent = 0;
    numbers.setAttribute('id', 'number-'+0)
}
buttonsDiv.appendChild(numbers);
}

//POINT BUTTON CREATION
let point = document.createElement('button');
point.setAttribute('class', 'numbers');
point.setAttribute('id', 'numbers-.');
point.textContent = ".";
point.addEventListener("click",takeNumbers);
point.addEventListener("click",displayNumbers);
buttonsDiv.appendChild(point);

//NEGATIVE SIGN BUTTON CREATION
let negsign = document.createElement('button');
negsign.setAttribute('class', 'numbers');
negsign.setAttribute('id', 'numbers--');
negsign.addEventListener("click", function(){
    isSignCalled = !isSignCalled;
    if(isSignCalled){
        values.unshift("-");
    }
    else values.shift();
})
negsign.addEventListener("click", displayNumbers);
negsign.textContent = '-  +';
buttonsDiv.appendChild(negsign);

//ADDING EVENT LISTENER + FUNCTION TO CLEAR THE SCREEN 
let clearBtn = document.getElementById('clear');

//ops signs
let operands = document.querySelectorAll(".operant");
operands.forEach((elem) =>{
    elem.addEventListener("click",takeNumbers);
    elem.addEventListener("click",displayNumbers);

})
//Take numbers 
function takeNumbers() {
    values.push(this.textContent);
}
//Display numbers
function displayNumbers () {
    screenDisply.textContent = values.join("");
}
function makeOps (){
    // alert(`${values.join("")}`);
    let sign;
    for(let i = 0; i < values.length; i++){
        if(values[i] === "+"||values[i] === "-"||values[i] === "/"||values[i] === "X"){
            sign = values[i];
            number1 = parseFloat(values.slice(0, values.indexOf(sign)).join(""));
            number2 = parseFloat(values.slice(values.indexOf(sign)+1).join(""));
        }
   
    }
    if(sign === "+"){
        progressDsply.textContent = number1 + number2;
    }
    else if(sign === "-"){
        progressDsply.textContent = number1 - number2;
    }
    else if(sign === "/"){
        progressDsply.textContent = number1 / number2;
    }
    else if(sign === "X"){
        progressDsply.textContent = number1 * number2;
    }
    // alert(`${number1} and second number is ${number2}`);
    
}

function removeElem() {
    values = [];
    progressDsply.textContent = "";
    screenDisply.textContent = '';

}
let clearC = document.getElementById('clear');
clearC.addEventListener('click', removeElem);