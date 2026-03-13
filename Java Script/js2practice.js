// const data = [
//   ["Alice", ["math", "science"]],
//   ["Bob",   ["history", "art"]]
// ];

// console.log(data[1][1][0]);



// let arr = [[1,2,3,0],[4,5,6,11],[7,8,9,22]];


// let top = 0, left  = 0, bottom = arr.length-1, right = arr[0].length-1;

// let ans  ='';

// while (top <= bottom && left <=right ){

// for(let i = left ; i <=right; i++){
//         ans += arr[top][i];
// }
// top ++;

// for (let  i = top ; i <=bottom ; i++){
//      ans += arr[i][right];
// }
// right  --


// for (let  i = right ; i >= left ; i --){
//     ans += arr[bottom][i];
// }
// bottom--

// for (let i = bottom ; i >=top; i--){
//     ans  += arr[i][left];
// }
// left ++
// }
// console.log(ans);



// let  arr = [[2,4],[6,8]]

// let k = 2
// let arr2 =arr.flat()
// let n = arr2.length;
// let mid = 0
// if (n%2 === 0){
//     mid = arr2[Math.floor(n/2)]
// }
// else {
//     mid = (arr[mid - 1] + arr[mid]) / 2;
// }



// // console.log(mid);
// for (let i = 1; i <n ; i ++){
//     if ((arr2[i]-arr2[i-1])% k !== 0 ){
//         console.log("Not Possible ")
//         break;
//     }
//     else {
//         console.log("Possible")
//         break;
//     }
// }

// let ops = 0;
// for (let x of arr2) {
//     ops += Math.abs(x - mid) / k;
// }
// console.log(ops)


// for (let i=1; i <= n ; i++){
//     let str =''
//     for (let  j=1;j<=i;j++){
//         str+="* "
//     }
//     console.log(str);
// }


// function printstars(count){
//     if (count <=0){
//         return " "
//     }
//     return "* " + printstars(count-1);
// }



// function cols(n,st =1){
//     if (st > n){ 
//         return 
//     }
//     console.log(printstars(st));
//     return cols(n,st+1);
// }

// let n =5;
// cols(n)



//         1
//       2 1 2
//     3 2 1 2 3
//   4 3 2 1 2 3 4
// 5 4 3 2 1 2 3 4 5



// Q1  (using loops)

// let n =5
// for (let i = 1;i <=5;i++){
//     let str  = ''
//     for (let j = i ; j>=1;j--){
//         str+= j + " "
//     }
//     console.log(str)
// }


//  Q1 (using recursion)

// let  n = 5 


// function col(st){
//     if (st <= 0){
//         return  " "
//     }

//     return st +" " + col(st-1)
// }
// function row(n , st =1){
//     if (st > n){
//         return " "
//     }

//     console.log(col(st))
//     return row(n, st+1)
// }

// row(n)

// Q3 (using for loop)
// let  a= 10 , b =20

// function isPrime(n){
//     for (let i = 2; i*i < n ; i++){
//         if (n%i==0){
//             return false
//         }
        
//     }
//     return true
// }

// function primeInRange(a,b){
//     let ans  = " "
//     for (let i = a ; i<=b; i++){
//         if (isPrime(i)){
//             ans += i +" ";
//         }
//     }
//     console.log(ans)
// }


// primeInRange(a,b)

// Q3 (using recursion)

// let  a= 10 , b =20

// function isPrime(n, i =2){
//     if (n < 2 ) return false;

//     if (i*i > n) return true

//     if (n%i == 0) return false
//     return isPrime(n,i+1);
// }

// function printPrime(a,b){
//     if (a>b){
//         return 
//     }

//     if (isPrime(a)){
//         console.log(a)
//     }

//     return printPrime(a+1,b)


// }

// printPrime(a,b)

// Q4



// let arr = [1,2,3,4,5];

// console.log(arr.filter((a)=>a%2!==0).map((a)=>a*a).reduce((acc,curr)=>acc+=curr))




// Q5



// function isPalindrome(str){
//     let i = 0 , j =str.length-1 ;

//     while(i<=j){
//         if(str[i]!==str[j]){
//             return false
//         }
//         i++;
//         j--
//     }
//     return true
// }
// let ans =[]
// function palindromeSub(str){
//     let n = str.length;
//     for(let i =0 ; i<n ; i++){
//         for (let j =i ; j <=n; j++){
//             let sub = str.slice(i,j);
//             if (isPalindrome(sub)&& sub.length>1){
//                 ans.push(sub)
//             }
//         }
//     }
// }

// let str = 'abaab'

// palindromeSub(str);


// console.log(ans)






// let a= [1,2,3]
// let b = [4,5];


// let c = a.concat(b)

// console.log(c);

// c[1]=8

// console.log(c);
// console.log(a)






// Q --> remove falsy values  in shortest code possible 


// let arr = [1,0,null,2,3, undefined]

// console.log(arr.filter(Boolean))


// let arr = [1,1,2,2,2,4,5,5]


// let arr = [1,1,2,2,2,4,5,5];
// let filter =arr.reduce((acc,curr)=>{
//     acc[curr] = curr||0
//     return acc
// },{})

// console.log(filter)



// let freqMap = arr.reduce((acc, curr) => {
//   acc.set(curr, (acc.get(curr) || 0) + 1);
//   return acc;
// }, new Map());

// console.log(freqMap);


// Q6 Frequency based sorting 


//  let arr = [1,1,2,2,2,4,5,5]

//  let freqMap = arr.reduce((acc, curr) => {
//   acc.set(curr, (acc.get(curr) || 0) + 1);
//   return acc;
// }, new Map());



// console.log(arr.sort((a,b)=>{
//     return freqMap.get(a) - freqMap.get(b)
// }))

// Q1-E: Increasing Star Triangle
// Print a triangle where row i contains i stars.
// Example (n = 5):
// *
// * *
// * * *
// * * * *
// * * * * *



// let  n = 5


// using for loop
// for (let  i =1; i<= n ; i++){
//     let str = "";
//     for (let j =1 ; j <=i ;j++){
//         str += "* "
//     }
//     console.log(str)
// }


// let  n = 5

// // using recursion 
// function col(i, j =1){
//     if (j > i){
//         return ""
//     }

//     return "* "+col(i,j+1)
// }

// function row (n, i =1){
//     if (i>n){
//         return ""
//     }

//     console.log(col(i))

//     row(n, i+1);
// }

// row(n)
 





// let n =5 

// 5
// 45
// 345
// 2345
// 123345

// function col(start, end) {
//   if (start > end) return "";

//   return start + col(start + 1, end);
// }

// function row(n, orignal = n){
//     if(n<=0){
//         return""
//     }

//     console.log(col(n, orignal))

//     return row(n-1,orignal)
// }


// console.log(row(n))

// let n =5 
// for (let  i = n ; i >0  ; i--){
//     let row = ""
//     for (let j = i; j<= n ; j++){
//         row+= j
//     }
//     console.log(row)
// }



// let arr = [4,7,8,1,9,0];

// // BUBBLE SORT

// function bubbleSort(arr){
//     let n =arr.length-1;
//     for (let i = 0; i <n; i++){
//         for (let j = 0; j < n-i; j++){
//             if (arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]] = [arr[j+1], arr[j]]
//             }
//         }
//     }
//     console.log(" Bubble Sort : ", arr)
// }
// bubbleSort(arr)


// arr = [4,7,8,1,9,0]

// Selection Sort
// function selectionSort(arr){
//     let n =arr.length-1;
//     for(let i = 0 ; i <= n ; i++){
//         let minIdx = i;
//         for (let j = i+1; j <=n;j++){
//             if (arr[j]<arr[minIdx]){
//                 minIdx = j
//             }
//         }
//         [arr[i],arr[minIdx]]= [arr[minIdx], arr[i]]
//     }
//     console.log(" Selection Sort : ", arr)

// }

// selectionSort(arr)


// Insertion Sort


// arr = [4,7,8,1,9,0]
// function insertionSort(arr){
//     for (let i =1; i <arr.length;i++){
//         let  j = i-1 ;
//         let curr = arr[i]
//         while(j >= 0 && arr[j]>curr){
//             arr[j+1] =arr[j]
//             j--
//         }
//         arr[j+1]= curr
//     }

//     console.log("Insertion Sort",arr);

// }

// insertionSort(arr)

// Input

// 4
// 1 1 1 1
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4
// Output

// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4

// let  n = 4

// let arr = [[1,1,1,1],[2,2,2,2],[3,3,3,3], [4,4,4,4]];

// let ans = [];
// for (let i = 0; i < n; i++){
//     let la = []
//     for (let j = 0 ; j < n; j++){
//         la.push(arr[j][i])
//     }
//     ans.push(la)
// }

// console.log(ans)


// let arr = [0,1,null, "", undefined, 2,3];


// console.log(arr.filter(Boolean))


// Q2-E: Sum of Even Numbers (HOF Only)
// Given an array, return the sum of all even numbers using only filter and reduce.
// Input: [1,2,3,4,5,6]
// Output: 12

// let input =  [1,2,3,4,5,6];
// let ans = input.filter((a)=>a%2==0).reduce((acc,curr)=>acc+=curr)
// console.log(ans)

// Q3-E: Count Vowels in Range
// Print all numbers between a and b that contain at least one digit 5.
// Input: a=10, b=60
// Output: 15 25 35 45 50 51 52 53 54 55 56 57 58 59



// *****
// *   *
// *   *
// *   *
// *****


