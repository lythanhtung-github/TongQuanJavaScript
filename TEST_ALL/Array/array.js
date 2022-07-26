function getResult(){
    let size = Number(document.querySelector('#size').value);
    let min = Number(document.querySelector('#min').value);
    let max = Number(document.querySelector('#max').value);
    let maxOfArray;
    let countEven = 0;
    if (checkSize(size) ==true){

        let numbers = new Array(size);
        for (let i = 0; i < numbers.length; i++) {
            numbers[i] = Math.floor(Math.random() * (max -min+1) + min);
        };
        
        maxOfArray = numbers[0];
        if (numbers[0]%2 == 0){countEven +=1};
        for (let j = 1; j < numbers.length; j++) {
            if (numbers[j] > maxOfArray){
                maxOfArray = numbers[j];
            }
            if (numbers[j]%2 ==0){
                countEven +=1;
            }
        };

        document.querySelector('#array').innerHTML = numbers;
        document.querySelector('#maxOfArray').value = maxOfArray;
        document.querySelector('#countEven').value = countEven;
    }
}

function checkSize(size){
    if (size <0 || size == ""){
        alert('Vui nhập lại kích thước mảng!');    
    }
    else 
    {
        return true;
    }
}


