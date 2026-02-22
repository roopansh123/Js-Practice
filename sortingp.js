// let arr1 = [1, 3, 4, 5];
// let arr2 = [2, 4, 6, 8];

// let ans = new Array(arr1.length + arr2.length);


// let i = 0; j = 0; k = 0;

// while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//         ans[k++] = arr1[i++];
//     }
//     else {
//         ans[k++] = arr2[j++];
//     }
// }

// while (i < arr1.length) {
//     ans[k++] = arr1[i++];
// }

// while (j < arr2.length) {
//     ans[k++] = arr2[j++];
// }
// console.log(ans);


// Insertion sort
// let  n = 6 
// let arr = [1,4,3,5,6,2]



// for (let i =1 ; i < n ; i ++){
//     let  curr = arr[i]

//     let  j = i-1;
//     while (j>=0 &&arr[j]>curr){
//         arr[j+1]= arr[j]
//         j--
//     }
//     arr[j+1]=curr
//     console.log(arr.join(" "))
// }

// console.log(arr.join(" "))




// const employees = [
//   { department: "HR", name: "Anjali", age: 32 },
//   { department: "Tech", name: "Aman", age: 28 },
//   { department: "HR", name: "Rahul", age: 25 },
//   { department: "Tech", name: "Sneha", age: 24 },
//   { department: "Finance", name: "Kunal", age: 30 },
//   { department: "Tech", name: "Divya", age: 28 },
// ];




// employees.sort((a,b)=>{
//     if (a.department>b.department){
//         return 1
//     }
//     else if(a.department<b.department){
//         return -1 
//     }

//     return a.age - b.age
// })


// console.log(employees)



let arr = [1,4,3,5,6,2]
function quickrandom(arr){
    let pivot =  Math.random()
}