// // 


//  Hollow Diamond 


// let n = 5;
    
//     let tn = n
// 	for (let i =1 ; i<= n ;i++){
//         let row =""
// 		for(let j =1;j<=n-i;j++){
//             row +="  "
//         }
//         for (let k =1 ; k <=2*i-1;k++){
//             if (k==1 || k == 2*i -1 ){
//                 row += "* "
//             }
//             else {
//                 row += "  "
//             }
//         }
        
// 	console.log(row);
//     }

//     for (let i =n-1 ; i>=1 ;i--){
//         let row =""
// 		for(let j =1;j<=n-i;j++){
//             row +="  "
//         }
//         for (let k =1 ; k <=2*i-1;k++){
//             if (k==1 || k == 2*i -1 ){
//                 row += "* "
//             }
//             else {
//                 row += "  "
//             }
//         }
        
// 	console.log(row);
//     }

 


//  Inverted hollow diamond

// let n = 5;

// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= n - i; j++) {
//         row += "*";
//     }
//     for (let k = 1; k <= (2*i - 1); k++) {
//         if (k === 1 || k === (2*i - 1)) {
//             row += "*";
//         } else {
//             row += " ";
//         }
//     }
//     for (let j = 1; j <= n - i; j++) {
//         row += "*";
//     }
//     console.log(row);
// }

// for (let i = n - 1; i >= 1; i--) {
//     let row = "";
//     for (let j = 1; j <= n - i; j++) {
//         row += "*";
//     }
//     for (let k = 1; k <= (2*i - 1); k++) {
//         if (k === 1 || k === (2*i - 1)) {
//             row += "*";
//         } else {
//             row += " ";
//         }
//     }
//     for (let j = 1; j <= n - i; j++) {
//         row += "*";
//     }
//     console.log(row);
// }




// let n =3;
// for (let i =1; i<=2*n-1;i++){
//     line = ""
//     for (j =1 ; j<=2*n-1; j++){
//         if (i==j || j ==2*n-i){
//             line +="*";
//         }
//         else line +=" "
//     }
//     console.log(line);
// }

// function table(num){
//     for (let i= 1 ; i<=10;i++){
//         console .log(num * i);
//     }
// }

// console.log(table(2));


// function binToDec(s) {
//   //Write code here
//   let length =0;
//   let temps = s;
//   let dec = 0;

//   while (temps>0){
//     temps= Math.floor(temps/10);
//     length ++;
//   }

//   temps =s;
  
//   while (temps>0){
//     let rem = temps%10
//     let bin = rem ** length ;
//     dec+=bin;
//     length --;
//     temps = Math.floor(temps/10);
//   }
//   return dec




// console.log( 1< Infinity)


  // function getCounter() {
  //   let counter = 0;
  //   return () => {
  //     return counter++;
  //   }
  // }

  // let count = getCounter();
  // console.log(count());  // 0
  // console.log(count());  // 1
  // console.log(count());  // 2




// function getCounter() {
//   let counter = 0;
//   let addToCounter = () => {
//     counter++;
//   }
//   addToCounter();
//   return counter;
// }

// let count = getCounter();
// console.log(count);
// console.log(count);
// console.log(count);

// function getCounter() {
//   let counter = 0;
//   return function () {
//     counter++;
//     return counter;
//   }
// }

// let count = getCounter();
// console.log(count()); 
// console.log(count()); 
// console.log(count()); 





// var foo = function bar(){
//   console.log(typeof bar)
//   return 1;
// };

// console.log(typeof foo)

// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question('Who are you?', name => {
//   console.log(`Hey there ${name}!`);
//   readline.close();
// });



// function createCounter() {

//     var count = 0; 
  
//     return function() {
//       count++;
//       console.log(count);
//     //   return count;
//     };
//   }

//   let myCounter = createCounter();
  
// // console.log(count)
//   createCounter()
//   createCounter()
//   createCounter()


function at(array, index){
    if (index > 0 ){
      return array[index]
    }
    else {
      index = array.length - index
      return array[index]
    }
}