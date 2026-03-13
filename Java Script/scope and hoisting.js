// let x = 5;
// function show() {
//   let x = 10;
//   console.log(x);
// }
// show();
// console.log(x);


// console.log(a);
// function a() {
//   console.log('Func');
// }
// var a = 10;
// console.log(a);



// map
// const  double = arr.map(ar =>ar*2);
// console.log(double);

// filter
// const even = arr.filter(ar=>ar%2===0)
// console.log(even);


// reduce
// const avg = arr.reduce((acc,curr )=> acc+(arr.length-curr), 0)
// console.log(avg);

// reduce
// const sum = arr.reduce((acc,curr )=> acc+curr, 0)
// console.log(sum)

// const max = arr.reduce((acc,curr)=>())
// console.log(max);


// let ar =[]
// ar[1] =3;
// console.log(ar);


// const arr = [1,2,3,4];
// const sum  = arr.reduce((sum, curr)=>sum +curr,0);
// const ar = arr.map(num => sum - num);


// console.log(ar);


// Given an array numbers = [1, 2, 3, 4, 5], use .map() to create a new array where each number is doubled.
// const numbers = [1, 2, 3, 4, 5] ;
// const dub = numbers.map(number=>2*number);
// console.log(dub);



// Convert an array of numbers into strings:
// arr = [10, 20, 30] → ["10", "20", "30"].

// const arr = ["10", "20", "30"];

// const str = arr.map(Number)

// console.log(str)



// Create a new array that adds 5 to each element:
// arr = [3, 8, 11] → [8, 13, 16].

// const numbers = [3, 8, 11];
// const add = numbers.map(number => number +5 );
// console.log(add);



// reduce
// const avg = arr.reduce((acc,curr )=> acc+(arr.length-curr), 0)
// console.log(avg);





// Nos greatewr than 35


// function ArrayProblem2(n, arr) {
//   // Write code here
//   let count  = 0;
//   for (i=0 ; i<n ;i ++){
//     if (arr[i]>35){
//       count += 1
//     }
//   }

//   return count
// }


// const numbers  =[12,67,89,16,23];

// const count  = numbers.filter(number => number>35);
// console.log(count);



// let count = 0;
  // for(let i =0; i<arr.length-1; i++){
  //   if (arr[i]+ arr[i+1]  == k){
  //     count +=1;
  //   }
  // }
  // return count;



//   let users = [
//   { name: "Amit", age: 25 },
//   { name: "Neha", age: 22 },
//   { name: "Karan", age: 28 }
// ];


// const nam = users.map(user => user.name)

// console.log(nam);


// Convert each name in the array to uppercase:
// ["rohan", "simran", "avi"] → ["ROHAN", "SIMRAN", "AVI"].

// const names= ["rohan", "simran", "avi"];
// const big = names.map(name => name.toUpperCase() );
// console.log(big);




// Extract only the first letter of each word:
// ["Cat", "Dog", "Elephant"] → ["C", "D", "E"].


// const animals =  ["Cat", "Dog", "Elephant"] ;

// const firstl = animals.map(animal => animal[0]);

// console.log(firstl);



// Given an array prices = [100, 200, 300], apply 10% discount using .map() → [90, 180, 270].


// const prices = [100, 200, 300];

// const discount = prices.map(price => price - (price/10))

// console.log(discount);




// [1, 2, 3] 
// → [{id: 1}, {id: 2}, {id: 3}]


// const numbers  = [1, 2, 3] 

// const obj = numbers.map(number => ({id : number}));
// console.log(obj);



// const words = ["hello", "map", "javascript"];

// const lengths = words.map(word => word.length);

// console.log(lengths);


// const data = [
//   {first: "Raj", last: "Kumar"},
//   {first: "Sneha", last: "Verma"}
// ];

// const full = data.map(d => d.first + " " +d.last);

// console.log(full); 



let products = [
  {name: "Laptop", price: 50000, tax: 18},
  {name: "Phone", price: 20000, tax: 15}
];

let updatedprooducts = products.map(product=> {
  let finalprice = product.price += product.price *product.tax/100;
  return {  
      name : product.name ,
      finalprice

  }
}
);

console.log(updatedprooducts);