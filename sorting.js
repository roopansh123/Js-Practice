// const products = [
//     {
//         name :"B",
//         price : 30
//     },
//     {
//         name :"A",
//         price : 20
//     },
//     {
//         name :"C",
//         price : 100
//     }
// ]

// console.log(products.sort((a,b)=>a.price -b.price));



// const alphabets = ['a','z', 'c','g'];


// console.log(
//     alphabets.sort()
// )




// const employees = [
//     {name : "John", dept : "IT", salary : 50000},
//     {name : "Alice", dept : "HR", salary : 55000},
//     {name : "Bob", dept : "IT", salary : 60000},
//     {name : "Carol", dept : "HR", salary : 48000}
// ]

// const semp =(employees.sort((a,b)=>a.salary - b.salary));
// console.log(semp.sort(
//     (a,b)=>{
//         if(a.dept>b.dept) return -1
//         if(a.dept<b.dept) return 1

//     }
// )) 



// const employees = [
//     {name : 'Alice', age : 30, salary :50000 },
//     {name : 'Bob', age : 25, salary :60000 },
//     {name : 'Charlie', age : 25, salary :55000 }
// ]

// let semp = employees.sort((a,b)=>{
//     if (a.age > b .age) return 1
//     return b.salary-a.salary;
//     // if (b.salary > a.salary) return 1
// });
// console.log (semp);

// const mixed = [5, null, 2,undefined,8,1,null]

// console.log(mixed.sort((a,b)=>{
//     if (a== undefined || b == undefined) return 1;
//     else return 1;
// }));
