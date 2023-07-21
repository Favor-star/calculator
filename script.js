'use strict'

//VARIABLE'S DECLARATION
let buttonsDiv = document.querySelector('.buttons');
// let operators = document.getElementById('main-operators');
let content = [];
let displayValue =[];
let screenDisply = document.getElementById('current');
let progressDsply = document.getElementById('progress')
let isFnCalled = false;
let result;
let num1;
let num2;
let flag;
let getSign

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
numbers.addEventListener('click', getNumbers);
buttonsDiv.appendChild(numbers);
}
//POINT BUTTON CREATION
let point = document.createElement('button');
point.setAttribute('class', 'numbers');
point.setAttribute('id', 'numbers-.');
point.textContent = ".";
buttonsDiv.appendChild(point);

//function to acqire numbers
function getNumbers(){
   
    content.push(this.textContent);
    screenDisply.textContent = content.join('');
    for(let i = 0; i < content.length; i++){
        if(content[i] === '+'||content[i] === '-'||content[i] === '*'||content[i] === '/'){
            getSign = content[i];
            num1 = parseFloat(content.slice(0,(content.indexOf(content[i]) )).join(''));
            
        }

    }
    return num1;
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
 });
 //CLEARING FUNCTION
 function clearing(){ 
    content=[];
    screenDisply.textContent = '';
    progressDsply.textContent = '';
 }
//FUNCTION TO DETECT THE OPERATOR SIGN DUSPLAY THE NUMBER BEING OPERATED ON.
function makeOperation(sign) { 

    if(sign === "="){
        for(let i = 0; i < content.length; i++){
            num2 = parseFloat(content.slice((content.indexOf(getSign) +1 ), content.length).join(''));
        }
        alert('num1:    ' +num1 + ',     num2:  ' + num2);
    }  
    else if(sign === "+"){
        content.push('+');
        flag = 1;
        screenDisply.textContent = content.join('');
        
    }

    else if(sign === "-"){
        flag = 2;
        content.push('-');
        screenDisply.textContent = content.join('');
        
    }

    else if(sign === "*"){
        flag = 3;
        content.push('*');
        screenDisply.textContent = content.join(''); 
        
    }

    else if(sign === "/"){
        flag = 4;
        content.push('/');
        screenDisply.textContent = content.join('');
    }
    
    //SWITCH CASE TO DISPLAY THE RESULTS
    switch (flag) {
        
        case 1:
            // content.push('+');
            result = num1 + num2;
            progressDsply.textContent = result;
            // screenDisply.textContent = content.join('');
            // break;
        case 2:
            result = num1 - num2;
            progressDsply.textContent = result;
            // content.push('-');
            // screenDisply.textContent = content.join('');
            break;
        case 3:
            result = num1 * num2;
            progressDsply.textContent = result;
            // content.push('*');
            // screenDisply.textContent = content.join('');
            break;
        case 4:
            result = num1 / num2;
            progressDsply.textContent = result;
            // content.push('/');
            // screenDisply.textContent = content.join('');
            break;
            case "=":
                

        // //     for(let i = 0; i < content.length; i++){
        // //         num2 = parseFloat(content.slice((content.indexOf('+') +1 ), content.length).join(''));
        // //     }
        // // alert('num2:' +num2 + ', num1:' + num1);
            break;
    }
    // screenDisply.textContent = result;

}