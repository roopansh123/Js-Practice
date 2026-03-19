// Use getElementsByClassName to get all message elements
const message = document.getElementsByClassName("message");

 
// Use getElementsByClassName to get all message title elements
const messageTitle = document.getElementsByClassName("message-title");

// Use for of loop to add background color as lightyellow to all even index messages and yellow to all odd index messages
let  elementidx = 0;
for (let ele of message){
    if (elementidx %2 === 0){
        ele.style.backgroundColor = "lightyellow"
    }
    else{
        ele.style.backgroundColor = "yellow"
    }
    elementidx++
}
//  Use for of loop to add index to each message title
let msgIdx = 1

for (let ele of messageTitle){
    ele.innerText = `${msgIdx}. ${ele.innerText} `;
    msgIdx++;
}