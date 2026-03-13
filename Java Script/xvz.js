// let num = 12
// let flag = true
// for (let i = 2 ; i < num ; i++){
//     if (num % i == 0){
//         flag = false
//     }
// }
// if (flag){
//     console.log("prime number")
// }else{
//     console.log("not a prime number ")
// }



// const arr = [1,2,3,4,5,6]
// let n = arr.length
// for (let i = 0; i < n; i++){
//     arr.pop()
// }
// console.log(arr)


// let a = "10"
// let b = 10
// let c = a + b
// console.log(c, typeof(c))


// let x = 5
// let y = "5"
// console.log(x == y)
// console.log(x === y)


// // let 1name = "Ram"
// // let first-name = "Sita"
// let _age = 25
// let $price = 100
// // let my name = "Krishna"
// console.log(_age,$price);

// let a = 10
// let b = 20
// let result = a + b * 2 / 4 - 5
// console.log(result);

// let x = 5
// x = x + 10
// x = x * 2
// console.log(x)


// let marks = 75
// if(marks >= 90) {
//     console.log("A")
// } else if(marks >= 75) {
//     console.log("B")
// } else if(marks >= 60) {
//     console.log("C")
// }

// let day = 3
// switch(day) {
//     case 1:
//         console.log("Monday")
//         break
//     case 2:
//         console.log("Tuesday")
//         break
//     case 3:
//         console.log("Wednesday")
//     case 4:
//         console.log("Thursday")
//         break
//     default:
//         console.log("Invalid")
// }



// for(let i = 1; i <= 5; i++) {
//     if(i === 3) continue
//     console.log(i)
// }


// let n = 1234
// let count = 0
// while(n > 0) {
//     count++
//     n = parseInt(n / 10)
// }
// console.log(count)




// let n = 1234;
// let reversed = 0;

// while (n > 0) {
//   let temp = n % 10;
//   reversed = reversed * 10 + temp;
//   n = Math.floor(n / 10);
// }

// console.log(reversed); // 4321



// let  n = 84
// let factors = [];

//  for ( i = 2 ; i * i < n ; i++){
//     if (n % i === 0){
//         factors.push(i);
//         while(n%i === 0){
//             n = n/i;
//         }
//     }
//  }

//  console.log(factors);


// let arr = [1, 2, 3, 2, 4, 3];
// let counter = {};

// for (let i = 0; i < arr.length; i++) {
//     let value = arr[i];

//     if (counter[value]) {
//         counter[value]++;
//     } else {
//         counter[value] = 1;
//     }
// }

// console.log(counter);


// function test() {
//     console.log(a)
//     console.log(b)
//     var a = 10
//     let b = 20
// }
// test()

// let x = 10
// function outer() {
//     let x = 20
//     function inner() {
//         let x = 30
//         console.log(x)
//     }
//     inner()
//     console.log(x)
// }
// outer()
// console.log(x)

// let arr1 = [1, 2, 3]
// let arr2 = arr1
// arr2.push(4)
// console.log(arr1)
// console.log(arr2)
// console.log(arr1 === arr2)


// let nums = [5, 2, 8, 1, 9]
// console.log(nums.sort())
// console.log(nums)

// let arr = [1, 2, 3, 4, 5]
// let result = arr.slice(1, 4)
// console.log(result)
// console.log(arr)

// let str = "  Hello World  "
// console.log(str.trim().length)
// console.log(str.length)

// let text = "apple,banana,mango"
// let fruits = text.split(",")
// console.log(fruits[1])
// console.log(fruits.join("-"))

// let name = "JavaScript"
// console.log(name.slice(0, 4))
// console.log(name.slice(-6))
// console.log(name.substring(4, 10))

// let obj1 = {name: "Ram", age: 20}
// let obj2 = obj1
// obj2.age = 25
// console.log(obj1.age)
// console.log(obj2.age)



// const [a,b,c] =[1,2,3];
// console.log(a,b,c)
// let count = 0
// function increment (){
//     count++
// }

// increment()
// increment()
// console.log(count)

// const obj = { a: null, b: undefined , c : 80};

// const { a = 10, b = 20 , c = 50} = obj;

// console.log(a); // null  (default NOT applied)
// console.log(b); // 20    (default applied)
// console.log(c)

// console.log(obj)

// let [a,b,c] = [1,2,3]

// console.log(a,b, c);


// let z = undefined || 10
// console.log(z);


// *Input:* 5

// *Output:*

//     *
//    ###
//   *****
//  #######
// *********


// *Input:* 7



//       *
//      ###
//     *****
//    #######
//   *********
//  ###########
// *************

// n = 5
// for (let i = 1; i <=n ; i++){
//     let line = '';

//     for (let k = n-i;  k > 0; k--){
//         line += ' ';
//     }
//     for(let j = 1; j<=2*i -1; j++){
//         if (i % 2 == 0){
//             line += '#'
//         }
//         else{
//             line +='*'
//         }
//     }
//     console.log(line);
// }




// Input: m = 5, n = 6

// Output:
//    0    2    3    0    5    0
//    2    0    0    0    0    0
//    3    0    0    0    0    0
//    0    0    0    0    0    0
//    5    0    0    0    0    0

// Explanation:
// •⁠  ⁠Cell (1,2): 1*2 = 2 (prime) -> display 2
// •⁠  ⁠Cell (1,3): 1*3 = 3 (prime) -> display 3
// •⁠  ⁠Cell (2,2): 2*2 = 4 (not prime) -> display 0
// •⁠  ⁠Cell (3,4): 3*4 = 12 (not prime) -> display 0



// function isPrime(num){
//     if (num < 2)  return false
//     for (let  i =2 ; i * i <= num ; i++){
//         if(num % i == 0){
//             return false
//         }
//     }
//     return true
// }

// let m = 5
// let n = 6
// for (let i =1 ; i<=m ; i++){
//     let line  = '';
//     for (let j = 1 ; j<= n ; j++){
//         let mul = i*j
//         if (isPrime(mul)){

//             line += mul +' '
//         }
//         else {
//             line += '0 '
//         }
//     }
//     console.log(line)
// }

// for (let i =1 ; i <= 50; i++){
//     let line  = ''
//     if (isPrime(i)){
//         line+= i
//         console.log(line) 
//     }
   
// }


// let n = 17
// console.log(n % 5)
// console.log(parseInt(n / 5))
// console.log(n / 5)

// let x = 5
// x = x + 10
// x = x * 2
// console.log(x)

// for(let i = 1; i <= 5; i++) {
//     if(i === 3) continue
//     console.log(i)
// }


// let n = 1234
// let count = 0
// while(n > 0) {
//     count++
//     n = parseInt(n / 10)
// }
// console.log(count)


// let sum = 0
// for(let i = 1; i <= 4; i++) {
//     sum += i
// }
// console.log(sum)


// let arr = [10, 20, 30, 40]
// console.log(arr[2])
// console.log(arr.length)
// arr.push(50)
// console.log(arr.length)
// console.log(arr)


// let student = {
//     math: 85,
//     science: 90,
//     english: 78,
//     hindi: 88
// }

// let total = 0 
// for (let marks in  student){
//     total += student[marks]
// }
// console.log(total);

// const arr = [1,2,3,4,5]
// console.log(arr)
// arr.length = 0

// console.log(arr)


let str  = 'abcr'

let ans = ''

for(let i = str.length-1; i >=0; i--){
    ans += str[i]
}

console.log(ans)