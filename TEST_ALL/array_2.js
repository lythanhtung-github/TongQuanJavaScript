
var A = [1,2,3,4,5,6,7];
var n = 3;


var d = 0;

var countArray = Math.ceil(A.length/n);
var C = new Array(countArray);
function funcArray(){
    for(var i = 0; i < n; i++)
    {
        for (var j = d; j < A.length; j++)
        {
            C[i][j] = A[i];

            // if (j % n == 0){
            //     d = d + n;
            //     break;
            // }
        }
    }
}

console.log(C);