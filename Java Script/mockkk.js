//Given an array of users with ages, group them into age 
// categories: "child" (<18), "adult" (18-60), "senior" (>60). 
// Return an object with counts for each category.

// const users = [
//  { name: "Alice", age: 15 },
//  { name: "Bob", age: 45 },
//  { name: "Charlie", age: 65 },
//  { name: "Diana", age: 30 },
//  { name: "Eve", age: 70 }
// ];



// let ans  = {'child': 0,
//             'adult' : 0,
//             'senior' : 0
// }

// for(let user of users){
//     if (user.age < 18){
//         ans["child"] = ans["child"]+1
//     }
//     else if(user.age >= 18 && user.age <= 60){
//         ans["adult"] = ans["adult"]+1
//     }
//     else {
//         ans['senior'] = ans['senior']+1
//     }
// }


// console.log(`Q1 `,ans)


// Q2


// const orders = [
//   {
//     orderId: 1,
//     items: [
//       { name: "Laptop", price: 1000, category: "Electronics" },
//       { name: "Mouse", price: 25, category: "Electronics" }
//     ]
//   },
//   {
//     orderId: 2,
//     items: [
//       { name: "Desk", price: 200, category: "Furniture" },
//       { name: "Chair", price: 150, category: "Furniture" },
//       { name: "Lamp", price: 30, category: "Furniture" }
//     ]
//   }
// ];

// let ans2 = {};


// for (const order of orders) {
  
//   for (const item of order.items) {
//     if (item.price > 50) {
//       if (ans2[item.category]) {
//         ans2[item.category] += item.price;
//       } else {
//         ans2[item.category] = item.price;
//       }
//     }
//   }
// }

// console.log(`Q2`,ans2);

// Q3

// const transactions = [
//  { type: 'deposit', amount: 1000 },
//  { type: 'withdrawal', amount: 200 },
//  { type: 'deposit', amount: 500 },
//  { type: 'withdrawal', amount: 100 },
//  { type: 'deposit', amount: 300 }
// ];
// let ans3 = 0

// for (let transaction of transactions) {
//     if (transaction.type === 'withdrawal') {
//         ans3 -= (transaction.amount * 1.02); 
//     } else {
//         ans3 += transaction.amount;
//     }
// }

// console.log(ans3)



// Q4

// const products = [
//  { name: 'Laptop', price: 95000, rating: 4.5, inStock: true },
//  { name: 'Mouse', price: 2000, rating: 4.2, inStock: true },
//  { name: 'Keyboard', price: 6000, rating: 4.8, inStock: true },
//  { name: 'Monitor', price: 24000, rating: 4.6, inStock: false },
//  { name: 'Webcam', price: 9500, rating: 3.9, inStock: true },
//  { name: 'Headphones', price: 16000, rating: 4.7, inStock: true }
// ];


// let ans4 = []

// for (let product of products){
//     if ((product.price <= 40000 && product.price>=4000) && product.rating >= 4 && product.inStock){
//         let finalPrice = product.price - (product.price * 0.1); 
        
//         ans4.push({
//             name: product.name,
//             price: finalPrice
//         });
//     }
// }

// console.log(ans4)


const sentences = [
 "The quick brown fox",
 "jumps over the lazy dog",
 "The dog was really lazy"
];

let ans5  = new Set()

const words = sentences.join(' ').split(' ');

const wordsFinal = words.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});

for (let word of wordsFinal){
    if(word.length>=4){
        ans5.add(word)
    }
}

console.log(ans5)



// Q6



const prices = [
 { date: '2026-02-10', price: 4000000 },
 { date: '2026-02-11', price: 4160000 },
 { date: '2026-02-12', price: 4280000 },
 { date: '2026-02-13', price: 4080000 },
 { date: '2026-02-14', price: 4320000 },
 { date: '2026-02-15', price: 4440000 },
 { date: '2026-02-16', price: 4384000 }
];
let arr = []
for(let i =1 ; i < prices.length;i++){
    let current  = prices[i]
    let prev =  prices[i-1]
    let ret = (current.price-prev.price)/prev.price * 100
    ret = ret.toFixed(2)
    current.return=ret;
    if(ret > 5){
        arr.push(current)
    }
    
}

let sum = 0
    let avg
    for(let ele of arr){
        sum += ele.return
    }
    ave = sum/arr.length

console.log(arr)
console.log(ave)