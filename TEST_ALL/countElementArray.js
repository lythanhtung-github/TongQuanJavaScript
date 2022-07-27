function migratoryBirds(arr) {
    // Write your code here
     let max = 0; 
     let max_id = 6;
     let store = new Array(6).fill(0);
     for(const num of arr){
         store[num]++;
         if(store[num]>max){
             max = store[num];
             max_id = num;
         }
         else if (store[num]=== max && num <max_id){
             max_id=num;
         }
     }
     return max_id;
}

arr = [1,1,1,2,3,3,3,3,3,4,4,4,4,4,4];
console.log(migratoryBirds(arr));
