let n = 6
for (let i =1 ; i <= n ; i++){
    line = ''
    for(let sp = n-i-1 ; sp>=0 ; sp--){
        line += " "
    }
    for(let j = 1 ; j<=2*i-1; j++){
        if(j==1 || j ==2*i-1){
            line+=i
        }
        else{
            line+=' '
        }
    }
    console.log(line)
}

for (let i =n-1 ; i > 0 ; i--){
    line = ''
    for(let sp = n-i-1 ; sp>=0 ; sp--){
        line += " "
    }
    for(let j = 1 ; j<=2*i-1; j++){
        if(j==1 || j ==2*i-1){
            line+=i
        }
        else{
            line+=' '
        }
    }
    console.log(line)
}