// let arr = [ 1,2,3,4,5,6]

// let ans =[]

// function findEven(arr,i){
//     if (i >= arr.length){
//         return
//     }

//     if(arr[i]%2== 0){
//         ans.push(arr[i])
//     }
//     findEven(arr,i+1)
// }

// findEven(arr,0)
// console.log(ans)

// let  n = 2
// function fib(n) {
//   // write code here
//   if (n==1 || n ==0){
//     return 1
//   }
//   let ans = fib(n-1)+fib(n-1)
//   return ans
// }
// console.log(fib(n))



let arr = [2,3,4,5,6,7,8]
let target = 8
let n = arr.length
let left = 0
let right = n-1

function recBin(arr, left, right,target){
    if (left >right){
        return -1
    }
    let mid = Math.floor((left + right) / 2)
    if (arr[mid] == target ){
        return mid
    }
    if ( arr[mid]> target){
        return recBin(arr,left,mid-1,target )
    }
    else{
        return recBin(arr,mid+1,right,target )
    }
}
console.log(recBin(arr, left, right  , target))