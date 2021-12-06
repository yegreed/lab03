let currentNum = '';
let previousNum = '';
let sign = '';
let display = document.querySelector('output');

let operations = ["+", "-", "/", "×"];
let nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function ac(){
    display.textContent = '0';
    currentNum = '';
    previousNum = '';
    sign = '';
}
function equal(){
    switch (sign){
        case '+':
            currentNum = (+currentNum) + (+previousNum);
            break;
        case '-':
            currentNum = (+previousNum) - (+currentNum);
            break;
        case '×':
            currentNum = (+currentNum) * (+previousNum);
            break;
        case '/':
            if (currentNum == 0){
                ac();
                alert('Ошибка! Деление на 0!');
                return
            }
            currentNum = (+previousNum) / (+currentNum);
            break;
    }
    display.textContent = currentNum;
    sign = '';
}
function del(){
    if (display.textContent === '0') return;
    if(currentNum.length == 1){
        currentNum = '';
        display.textContent = '0';
    }
    else {
        currentNum = currentNum.substring(0, currentNum.length-1);
        display.textContent = currentNum;
    }
}
function module(){
    currentNum *= -1;
    if (operations.includes(sign)){
        currentNum = '-';
        return;
    }
    display.textContent = currentNum;
}

let ACButton = document.querySelector('.AC');
ACButton.addEventListener("click", ac);
let equalButton = document.querySelector('.equal');
equalButton.addEventListener("click", equal);
let deleteButton = document.querySelector('.del');
deleteButton.addEventListener("click", del);
let moduleButton = document.querySelector(".module");
moduleButton.addEventListener("click", module);

let container = document.querySelector('.grid__body');
container.addEventListener('click', (event) =>{
    if (!event.target.classList.contains('grid__button')) return;
    let symbol = event.target.textContent;

    if (nums.includes(symbol)){
        if (display.textContent === '0'){
            currentNum = symbol;
            display.textContent = currentNum;
        }
        else {
            currentNum +=symbol;
            display.textContent = currentNum;
        }
    }
    if (operations.includes(symbol)){
        if (sign === ''){
            previousNum = currentNum;
            currentNum = '';
            sign = symbol;
        }
        else {
            sign = symbol;
        }
    }
})
