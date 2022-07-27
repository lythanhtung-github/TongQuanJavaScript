function bonAppetit(bill, k, b) {
    let sum = 0;
    for (let i = 0 ; i<bill.length; i++){
        sum +=bill[i];
    }
    console.log(sum);
    sum = sum /2;
    console.log (sum);
    // let result = sum - b;
    // return result;
    
   
}
let bill = [3, 10, 2, 9];
console.log(bill); //k = 1, b = 7
console.log(bonAppetit(bill,1,7));

//k vị trí A không ăn
// b số tiền A trả
