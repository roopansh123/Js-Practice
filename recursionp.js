
// function printdec(n, ans =" "){
//     if (n<=0){
//         return ans
//     }
//     ans+=n +" "

//      return printdec(n-1,ans)

// }
let n = 5
function printInc(x,  ans = ""){
    if (x>n){
        return ans
    }

    ans+=x
    return printInc(x+1, ans)
}

console.log(printInc(1))


// console.log(printdec(n))


