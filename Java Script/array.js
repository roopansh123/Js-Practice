// const single = [1,2,3,4]
// const double = single.map(number => number *2 );
// console.log(double);

// const matrix = [[1,2],[3,4],[5,6]];

// let sum = matrix.ruduce((acc,curr)=> {
//     return curr.ruduce((acc,sum)=>acc+sum)
// })

// console.log(sum);




// const students= [
//     {name : 'john' , score : 85},
//     {name : 'jane',  score : 92},
//     {name : 'bob',  score : 88},
// ];

// let fi = students.map((student, index) =>{
//         {student.name , score =student.score, student.roll = index+1};
//         return student;
// })

// console.log(fi);


const items  = ['A','B','C'];

const ans  =  items.map((item, index , array)=>{
    let islast = index === array.length-1
    let isFirst = index === 0

    return {item, last : islast , first : isFirst} 

    
}

) 

console.log(ans);