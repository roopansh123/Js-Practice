// let input  = [1,1,2,2,2,3];

// let maap = new Map();

// // Count frequency
// for (let i = 0; i < input.length; i++) {
//     maap.set(input[i], (maap.get(input[i]) || 0) + 1);
// }

// function bubblesort(input){
//     let n = input.length;

//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - 1 - i; j++) {

//             if (maap.get(input[j]) > maap.get(input[j + 1])) {

//                 [input[j], input[j + 1]] = [input[j + 1], input[j]];
//             }
//         }
//     }

//     return input;
// }

// console.log(bubblesort(input));



let input  = [1,2,3,4,5];

console.log(input.filter(num=>num%2!==0).map(num=>num*num).reduce((sum,square)=>sum+square,0))