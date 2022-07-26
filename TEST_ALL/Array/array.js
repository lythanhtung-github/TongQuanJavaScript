function getResult(){
    let size = Number(document.querySelector('#size').value);
    let min = Number(document.querySelector('#min').value);
    let max = Number(document.querySelector('#max').value);
    let arrNumbers = document.querySelector('#array');
    let arrTotal = document.querySelector('#total');
    let arrMax = document.querySelector('#maxOfArray');
    let arrCount = document.querySelector('#countEven');

    let maxOfArray;
    let countEven = 0;
    let total = 0;
    
    if (checkSize(size) ==true){

        let numbers = new Array(size);
        for (let i = 0; i < numbers.length; i++) {
            numbers[i] = Math.floor(Math.random() * (max -min+1) + min);
        };

        for (let i = 0; i < numbers.length; i++) {
            total += numbers[i];
        };

        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i]%2 ==0) countEven +=1;
        };

        maxOfArray = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] > maxOfArray) maxOfArray = numbers[i];
        };

        arrNumbers.innerHTML = numbers;
        arrTotal.value = total;
        arrMax.value = maxOfArray;
        arrCount.value = countEven;
    }
}

function reset(){
    document.querySelector('#size').value ="";
    document.querySelector('#min').value ="";
    document.querySelector('#max').value ="";
    document.querySelector('#array').innerHTML = "";
    document.querySelector('#total').value = "";
    document.querySelector('#maxOfArray').value = "";
    document.querySelector('#countEven').value = "";
}

function checkSize(size){
    if (size <0 || size == "") alert('Vui nhập lại kích thước mảng!');    
    else return true;
}


