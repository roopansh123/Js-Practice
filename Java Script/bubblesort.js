// function bubbledes(arr){
//     let n =arr.length
//     for (let i = 0 ; i < n -1; i++){
//         for(let j = 0; j <n-i-1; j++){
//             if (arr[j]< arr[j+1]){
//                 [arr[j], arr[j+1]]= [arr[j+1],arr[j]]
//             }
//         }
//     }
//     return arr
// }



// const students = [
//     {name : "Alice", score : 85},
//     {name : "Bob", score : 92},
//     {name : "Charlie", score : 78}
// ]


// function bubble(arr){
//     n =arr.length;
//     for (let i = 0 ; i < n -1; i++){
//         for(let j = 0; j <n-i-1; j++){
//             if (arr[j].score < arr[j+1].score){
//                 [arr[j], arr[j+1]]= [arr[j+1],arr[j]]
//             }
//         }
//     }
//     return arr

// }

// console.log(bubble(students))


// k th largest

// let arr = [3,2,1,5,6,4]
// let k = 2

// function bubble  (arr, k){
//     for (let i = 0 ; i < k ; i++){
//         for (let j = 0 ; j< arr.length-1 ;j++){
//             if(arr[j]<arr[j+1]){
//                 [arr[j], arr[j+1]]= [arr[j+1],arr[j]]
//             }
//         }
//     }
//     return arr
// }

// console.log(bubble(arr,k))


// function bubble(arr){
//     let n =arr.length
//     for (let i = 0 ; i < n -1; i++){
//         for(let j = 0; j <n-i-1; j++){
//             if (arr[j] > arr[j+1]){
//                 [arr[j], arr[j+1]]= [arr[j+1],arr[j]]
//             }
//         }
//     }
//     return arr
// }

let arr = [ 4,3,5,4,1,2]
let n = arr.length;
function bubblerec(arr,n){
    if (n<=1){
        return arr;
    }

    if(arr[n]< arr[n-1]){
        [arr[n],arr[n-1]] = [arr[n-1],arr[n]]
    }
    bubblerec(arr,n-1)
}
console.log(bubblerec(arr))