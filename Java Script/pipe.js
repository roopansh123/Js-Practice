const pipe = (...fn) => {
  return (value) => {                                                   
    return fn.reduce((acc, curr) => curr(acc), value);
  };
};

function abc(message) {
  console.log(message);
  message = message + "first function se aaya ";
  return message;
}

function cde(message) {
    console.log(message);
}

const output = pipe(abc)("roopansh");

// const initialList = [
//   { name: "Laptop", category: "electronics", price: 1000 },
//   { name: "Phone", category: "electronics", price: 500 },
//   { name: "Tablet", category: "electronics", price: 300 },
//   { name: "Headphones", category: "electronics", price: 80 },
//   { name: "Book", category: "books", price: 20 },
//   { name: "Notebook", category: "books", price: 10 },
//   { name: "Shirt", category: "clothing", price: 25 },
//   { name: "Watch", category: "electronics", price: 200 },
// ];

// const filterByCategory = (category, list) => {
//   return list.filter((item) => item.category == category);
// };

// console.log(filterByCategory("books", initialList));

class Customer {
  #panCard;

  constructor(name, age, panCard) {
    this.name = name;
    this.age = age;
    this.#panCard = panCard;
  }

  getPanCard() {
    return this.#panCard;
  }
}

const customer = new Customer("John", 25, "ABCDE1234F");

console.log(customer.name);
console.log(customer.age);
console.log(customer.getPanCard());

console.log(Object.keys(customer));

for (let key in customer) {
  console.log(key);
}

customer.panCard = "XYZ";
console.log(customer.getPanCard());

console.log(customer.panCard);
