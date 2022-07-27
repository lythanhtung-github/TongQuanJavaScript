function getResult(){
    let min = Number(document.querySelector('#min').value);
    let max = Number(document.querySelector('#max').value);
    let size = Number(document.querySelector('#size').value);
    
    let arrNumbers = document.querySelector('#array');
    let arrTotal = document.querySelector('#total');
    let arrMax = document.querySelector('#maxOfArray');
    let arrCount = document.querySelector('#countEven');
    
    if (size <0 || size == "") alert('Vui nhập lại kích thước mảng!');    
    else {
        let numbers = new Array(size);
        arrNumbers.innerHTML = randomNumbers(numbers, max, min);
        arrTotal.value = getTotal(numbers);
        arrMax.value = findMax(numbers);
        arrCount.value = countEven(numbers);
    }
};

function randomNumbers(numbers, max , min) {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = Math.floor(Math.random() * (max -min+1) + min);
    };
    return numbers;
};

function getTotal(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    };
    return total;
};

function countEven(numbers) {
    let countEven = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i]%2 ==0) countEven +=1;
    };
    return countEven;
};

function findMax(numbers) {
    let maxOfArray = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxOfArray) maxOfArray = numbers[i];
    };
    return maxOfArray;
};

function reset() {
    document.querySelector('#size').value ="";
    document.querySelector('#min').value ="";
    document.querySelector('#max').value ="";
    document.querySelector('#array').innerHTML = "";
    document.querySelector('#total').value = "";
    document.querySelector('#maxOfArray').value = "";
    document.querySelector('#countEven').value = "";
};