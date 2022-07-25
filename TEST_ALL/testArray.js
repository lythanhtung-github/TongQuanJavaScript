let numbers = [1,4,5,4,32,4];

// for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// let i = 0
// while(i < numbers.length) {
//     console.log(numbers[i]);
//     i++;
// }

// let i = 0;
// do {
//     console.log(numbers[i]);
//     i++;
// }
// while (i < numbers.length);

for (let index in numbers) {
    console.log(numbers[index]);
}
console.log('-----------------------------');
for (let number of numbers) {
    console.log(number);
}