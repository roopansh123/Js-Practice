// function selectionSort(arr) {
//     const n = arr.length;
    
//     for (let i = 0; i < n - 1; i++) {
//         let minIndex = i;
        
//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] > arr[minIndex]) {
//                 minIndex = j;
//             }
//         }
        
//         [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//     }
    
//     return arr;
// }
// console.log(selectionSort([64, 34, 25, 12, 22, 11, 90]));

// function kthSmallest(arr, k) {
//     const n = arr.length;
    
//     for (let i = 0; i < k; i++) {
//         let minIndex = i;
        
//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }
//         }
        
//         [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//     }
    
//     return arr[k - 1];
// }
// console.log(kthSmallest([7, 10, 4, 3, 20, 15], 3));



// let arr= [0,5,0,3,8,0,2];
// function moveZeroes(arr) {
//     let nonZero = 0;
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0) {
//             arr[nonZero] = arr[i];
//             nonZero++;
//         }
//     }
    
//     for (let i = nonZero; i < arr.length; i++) {
//         arr[i] = 0;
//     }
    
//     return arr;
// }   
// console.log(moveZeroes(arr));


// function nonZeroOptimized(arr) {
//     let nonZero = 0;
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0) {
//             if (i !== nonZero) {
//                 [arr[nonZero], arr[i]] = [arr[i], arr[nonZero]];
//             }
//             nonZero++;
//         }
//     }
    
//     return arr;
// }
// console.log(nonZeroOptimized(arr));


let arr = [4,3,2,1];

function selectionSort(arr) {
    const n = arr.length;
    let cnt = 0
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if(minIndex !== i){
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            cnt ++
        }
        
    }
    
    return cnt;
}

console.log(selectionSort(arr))