'use strict'

//numbers division
let buttonsDiv = document.querySelector('.buttons');
let operators = document.getElementById('main-operators');
let content = [];
let value;
let value2; 
let displayValue =[];
let screenDisply = document.getElementById('current');
let progressDsply = document.getElementById('progress')
let isFnCalled = false;
let clickTimes = 0;

let count = 1;
for(let  i = 0; i < 10; i++){
    let numbers = document.createElement('button');
numbers.setAttribute('class', 'numbers');
numbers.setAttribute('id', 'number-'+count);

numbers.textContent = count;
count++;
if(i === 9){
    numbers.textContent = 0;
    numbers.setAttribute('id', 'number-'+0)
}
numbers.addEventListener('click', function(){
    value = this.textContent;
    displayCont(value); 
});
buttonsDiv.appendChild(numbers);

}
//POINT BUTTON CREATION
let point = document.createElement('button');
point.setAttribute('class', 'numbers');
point.setAttribute('id', 'numbers-.');
point.textContent = ".";
point.addEventListener('click', function(){
    getNumbers();
});
buttonsDiv.appendChild(point);

function getNumbers(){
    clearing();
    value = this.textContent;
        displayCont(value);
        // return parseFloat(value);
        
}

//NEGATIVE SIGN BUTTON CREATION
let negsign = document.createElement('button');
negsign.setAttribute('class', 'numbers');
negsign.setAttribute('id', 'numbers--')
negsign.textContent = '-  +';
negsign.addEventListener('click', function(){
    isFnCalled = !isFnCalled;
    if(isFnCalled){
        value = "-";
        content.unshift(value);
        screenDisply.textContent = content.join('');
    }
    else {
        
        content.shift(value);
        screenDisply.textContent = content.join('');

    }
});
buttonsDiv.appendChild(negsign);

//FUNCTION TO DISPLAY CONTENTS IN SCREEN
function displayCont(value){
    content.push(value);
    displayValue.push(value);
    screenDisply.textContent = content.join('');
    progressDsply.textContent = displayValue.join('');
    
}
 //ADDING EVENT LISTENER + FUNCTION TO CLEAR THE SCREEN 
 let clearBtn = document.getElementById('clear');
 clearBtn.addEventListener('dblclick', function(){
    clearing();
 })
 function clearing(){ 
    content=[];
    screenDisply.textContent = '';
    progressDsply.textContent = '';
 }
//FUNCTION TO DETECT THE OPERATOR SIGN
function makeOperation(sign) { 
    let number1 = parseFloat(content.join(''));
    // let result =0;
    if(sign === '+'){
        // // alert('value:' + value);
        // clearing();
        // clickTimes++;
        // progressDsply.textContent =  displayValue.join('');
        // if(clickTimes === 2){
        // }
        
        
        
    }
    
}