// alert("hello")

let items= document.getElementsByClassName('lst-itm')

// console.log(items[0].innerText);

// for Practice only best way is to convert this into an array 
for(let i = 0; i <items.length; i++){
    console.log(items[i].innerText);
}


let items2 = Array.from(document.getElementsByClassName('lst2-itm'))

items2.forEach(item=>console.log(item.innerText))

