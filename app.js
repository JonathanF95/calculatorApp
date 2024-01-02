const one = document.querySelector('#one');
const two = document.querySelector('#one');
const three = document.querySelector('#one');
const four = document.querySelector('#one');
const five = document.querySelector('#one');
const six = document.querySelector('#one');
const seven = document.querySelector('#one');
const eight = document.querySelector('#one');
const nine = document.querySelector('#one');
const plus = document.querySelector('#one');
const minus = document.querySelector('#one');
const divide = document.querySelector('#one');
const mult = document.querySelector('#one');
const percent = document.querySelector('#one');
const clear = document.querySelector('#clear');
const remove = document.querySelector('#one');
const plusMinus = document.querySelector('#one');
const equal = document.querySelector('#one');
const period = document.querySelector('#one');
const zero = document.querySelector('#one');
const calculator = document.querySelector('#calculator');
const input = document.querySelector('#input');
let array = [];

calculator.addEventListener('click', (e) => {
    if (e.target.className === 'buttons' && e.target.id !== 'clear') {
        console.log(Number(e.target.textContent))
        input.value = e.target.textContent;

    }

})

clear.addEventListener('click', () => {
    input.value = '';
    array = [];
})

