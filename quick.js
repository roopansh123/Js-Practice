// let arr = [8,1,3,7,8,0,10]


// function quickSort(arr){
//     if(arr.length <= 1){
//         return arr
//     }

//     let pivot = arr[0]
//     let left  = []
//     let right = []


//     for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return [...quickSort(left), pivot,...quickSort(right)];
// }


// console.log(quickSort(arr));



let arr = [8,1,3,7,0,10]


function quickSort(arr){
    if(arr.length <= 1){
        return arr
    }
    
    let pivotidx = Math.floor(Math.random()*arr.length)
    let pivot = arr[pivotidx]
    let left  = []
    let right = []

    for (let i = 0; i < arr.length; i++) {
    if(i===pivotidx){
        continue;
    }    
    if (arr[i] < pivotidx) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot ,...quickSort(right)];
}
console.log(quickSort(arr));


