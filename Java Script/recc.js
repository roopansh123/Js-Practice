// function countMazePath(n, m) {

//     // base case
//     if (n === 1 && m === 1) return 1;

//     // out of grid
//     if (n === 0 || m === 0) return 0;

//     // move down + move right
//     return countMazePath(n - 1, m) + countMazePath(n, m - 1);
// }


// function mazepath(n,m,i=1,j=1){
//     if (i=== n && j=== m) return 1;

//     if (i >n || j > m) return 0

//     return mazepath(n, m, i + 1, j) + mazepath(n, m, i, j + 1) + mazepath(n, m, i+1 , j + 1);
// }

// console.log(mazepath(10,10))

// function countMazePath(n, m) {
//     function helper(r, c) {
//         if (r === n && c === m) return 1;
//         if (r > n || c > m) return 0;
//         return helper(r + 1, c) + helper(r, c + 1);
//     }
//     return helper(1, 1);
// }
// console.log(countMazePath(3,3))


let arr = [4,2,3,1
    
]