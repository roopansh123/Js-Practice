// function mergeSort(arr, mergeCount = 0) {
//     if (arr.length <= 1) {
//         return { array: arr, merges: mergeCount };
//     }

//     const mid = Math.floor(arr.length / 2);
//     const left = arr.slice(0, mid);
//     const right = arr.slice(mid);

//     const leftResult = mergeSort(left, mergeCount);
//     const rightResult = mergeSort(right, leftResult.merges);

//     const merged = merge(leftResult.array, rightResult.array);
    
//     return {
//         array: merged,
//         merges: rightResult.merges
//     };
// }

// function merge(left, right) {
//     const result = [];
//     let i = 0, j = 0;

//     while (i < left.length && j < right.length) {
//         if (left[i] <= right[j]) {
//             result.push(left[i++]);
//         } else {
//             result.push(right[j++]);
//         }
//     }

//     return result.concat(left.slice(i)).concat(right.slice(j));
// }

// const arr = [4,2,3,1];
// const result = mergeSort(arr);
// console.log("Sorted array:", result.array);
// console.log("Number of merges:", result.merges);


function merge(a,b,arr){
    let i =0, j = 0, k =0;

    while (i< a.length && j < b.length){
        if (a[i]<b[j]){
            arr[k++] =a[i++]
        }
        else arr[k++] = b [j++];
    }

    while(i<a.length) arr[k++] =  a[i++]
    while(j<b.length) arr[k++] =  b[j++]
}




function mergesort(arr){
    let n = arr.length;

    if (n==1){
        return arr
    }
    let a = new Array(Math.floor(n/2))
    let b = new Array(n - Math.floor(n/2))

    for(let i = 0; i < Math.floor(n/2); i++){
        a[i]= arr[i]
    }

    for(let i = 0; i < n-Math.floor(n/2); i++){
        b[i]= arr[Math.floor(n/2)+i]
    }

    mergesort(a);
    mergesort(b);

    merge(a,b,arr)

    return arr
}


let  arr = [4,2,3,1];
console.log(mergesort(arr));