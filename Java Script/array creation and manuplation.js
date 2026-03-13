// const arr = [-7,5,5,3,2,1];


// let maximun = arr.reduce((acc,curr)=> {
//     let acc2 = arr[0]
//     let acc1 = arr[0]
//     acc1 = Math.max(acc1, curr);
//     acc2 = Math.min(acc2,curr);
//     return [acc1,acc2];
// })




// let mini  = arr.reduce((acc,curr)=> {
//     acc = Math.min(acc, curr);
//     return acc;
// })



// const arr = [-7,5,5,3,2,1];
// let maximun = arr.reduce((acc,curr)=> {
//     return {
//         min :Math.min(acc.min,curr) 
//         max :Math.max(acc.max,curr) 
//     }
// },{
//     max : arr[0],
//     min : arr[0]
// })
// console.log(`maximum and minimum element is :- ${maximun}`);

// console.log(`minimum element is :- ${mini}`);






// const arr = [2,4,3,5,7,8,9];
const sum = 7;


// for(let i =0; i<arr.length; i++){
//     for(let j= i+1; j<arr.length ; j++){
//         if (arr[i]+arr[j] == sum){
//             console.log(`${arr[i]} + ${arr[j]}  =${arr[i]+arr[j]}`)
//         }
//     }
// }




//  find the product except self

const arr = [2,4,3,5,7,8,9];
const ans = []
for(let i = 0 ; i<arr.length ; i++){
    let product = 1
    for (let j =0; j<arr.length ; j++){
        if (i != j){
            product*= arr[j];
        }
    }
    ans.push(product);
}
console.log(ans)




