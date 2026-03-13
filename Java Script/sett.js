// let str  = 'hello world'
// let settt = new Set()
// for (let i of str){
//     settt.add(i)
// }

// console.log(settt)

// console.log(settt.size)

// arr= [1,4,5,5,7]

// console.log(new Set(arr).size !== arr.length);

let arr = [100,6,9,5,3,7,5]
let sse  =new Set(arr)
let maxcnt  = 0 
for (let ele of arr){
    if(!sse.has(ele-1)){    
        let ce = ele
        let cnt =1 

        while (sse.has(ce+1)){
            ce++
            cnt++
        }

        maxcnt=Math.max(maxcnt,cnt);
        
    }
}
console.log(maxcnt)



