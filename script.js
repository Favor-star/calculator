'use strict'

//numbers division
let buttonsDiv = document.querySelector('.buttons');
let operators = document.getElementById('main-operators');

let count = 1;
for(let  i = 0; i < 10; i++){
    let numbers = document.createElement('div');
numbers.setAttribute('class', 'numbers');
numbers.setAttribute('id', 'number-'+count);
numbers.textContent = count;
count++;
if(i === 9){
    numbers.textContent = 0;
    numbers.setAttribute('id', 'number-'+0)
}
buttonsDiv.appendChild(numbers);

}
//point and negative signs
let zero = document.getElementById('numbers-0');
let point = document.createElement('div');
point.setAttribute('class', 'numbers');
point.setAttribute('id', 'numbers-.');
point.textContent = "."
buttonsDiv.appendChild(point);

let negsign = document.createElement('div');
negsign.setAttribute('class', 'numbers');
negsign.setAttribute('id', 'numbers--')
negsign.textContent = '- / +'
buttonsDiv.appendChild(negsign);
