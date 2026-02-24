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




const employees = [
  { department: "HR", name: "Anjali", age: 32 },
  { department: "Tech", name: "Aman", age: 28 },
  { department: "HR", name: "Rahul", age: 25 },
  { department: "Tech", name: "Sneha", age: 24 },
  { department: "Finance", name: "Kunal", age: 30 },
  { department: "Tech", name: "Divya", age: 28 },
];




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





// let arr = [1,4,3,5,6,2]
// function quickrandom(arr){
//     let pivot =  Math.random()
// }


// function areAnagram(str1, str2){

//     if (str1.length !== str2.length){
//         return false
//     }
//     let maap = new Map()
//     for (let w of str1){
//         if (maap.has(w)){
//             maap.set(w,maap.get(w)+1)
//         }else{
//             maap.set(w,1)
//         }
//     }

//     let maap2 = new Map()
//     for (let w of str2){
//         if (maap2.has(w)){
//             maap2.set(w,maap2.get(w)+1)
//         }
//         else{
//             maap2.set(w,1)
//         }
//     }


//     for (let w of str1){
//         if (maap.get(w)!=maap2.get(w)){
//             return  false
//         }
//     }
//     return true
// }


// let a= "listen"
// let b = 'silent'

// console.log(areAnagram(a,b))



const orignal = { 
    name : "Alice",
    address : {city:"Pune", pin :411001},
    hobbies : ["reading", "coding"]
};


const clone = {...orignal};
clone.address.city = "Mumbai";
clone.hobbies.push("gaming");


console.log(orignal.address.city);
console.log(orignal.hobbies);



