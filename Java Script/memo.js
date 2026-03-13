// function factorial(n, memo= {}){
//     if (memo[n]){
//         return momo[n]
//     }
//     if ( n == 1){
//         memo[n]=n
//         return 1
//     }
//     memo[n]= n * factorial(n-1);
//     return  memo[n]
// }

// console.log(factorial(4))



// function tribo(n, memo={}){
//     if (memo[n]){
//         return memo[n]
//     }
//     if(n<=1){
//         return 1
//     }
//     memo[n]=tribo(n-1) + tribo(n-2) + tribo(n-2)
//     return memo[n]
// }

// console.log(tribo(4))


// let cnt  = 0
// function climb(n, i=0){
//     if(i>n){
//         return
//     }
//     if (i ==n){
//         cnt ++;
//         return 
//     }
//     return climb(n,i+1),climb(n,i+2)
    
// }
// climb(15)
// console.log(cnt)



// function countMazePath(n, m) {

//     // base case
//     if (n === 1 && m === 1) return 1;

//     // out of grid
//     if (n === 0 || m === 0) return 0;

//     // move down + move right
//     return countMazePath(n - 1, m) + countMazePath(n, m - 1);
// }