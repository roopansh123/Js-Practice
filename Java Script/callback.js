// const fetchDetails = new Promise((resolve,reject)=>{
//     setTimeout(()=>{

//     })
// })

// qrScan.then(idFind)
//             .then(amount)
//                 .then(pin)
//                     .then(initialPayment)
//                         .then(processPayment)
//                         .finally(success)

qrScan.then((data) => {
  console.log("data received");
  return data;
});
