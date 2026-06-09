// // // function greet(name,callback){
// // //     console.log(`hello ${name}`);
// // //     callback();
// // // }

// // // function greetingLine(){
// // //     console.log("Hello to meet you")
// // // }

// // // greet('roopansh',greetingLine);

// // // function fetchData() {
// // //   return new Promise(function (resolve, reject) {
// // //     console.log("fetching Data from derver");
// // //     setTimeout(function () {
// // //       resolve("data come from server");
// // //     }, 1000);
// // //   });
// // // }

// // // console.log(fetchData());

// // // fetchData().then(function (data) {
// // //   console.log("Received", data);
// // // });

// // // callback
// // // function calculate(a, b, callback) {
// // //   const sum = a + b;
// // //   callback(sum);
// // // }

// // // calculate(2, 3, function (sum) {
// // //   console.log("Sum is", sum);
// // // // });

// // // function calculate(a, b) {
// // //   return new Promise(function (resolve, reject) {
// // //     resolve(`Sum is ${a + b}`);
// // //   });
// // // }

// // // console.log(calculate(2, 3));

// // console.log("Start");

// // const promise = new Promise((resolve) => {
// //   console.log("Promise started");
// //   resolve("Resolved");
// // });

// // promise.then((result) => {
// //   console.log(result);
// // });

// // console.log("End");
// function getUser(userId) {
//   return new Promise(function (resolve, reject) {
//     // Fetch user
//     resolve({ id: 101, name: "John" });
//   });
// }

// function getOrders(userId) {
//   return new Promise(function (resolve, reject) {
//     // Fetch orders
//     resolve([{ id: 201 }, { id: 202 }]);
//   });
// }

// function getOrderDetails(orderId) {
//   return new Promise(function (resolve, reject) {
//     // Fetch order details
//     resolve({ shipmentId: 301 });
//   });
// }

// function getShipment(shipmentId) {
//   return new Promise(function (resolve, reject) {
//     // Fetch shipment details
//     resolve({
//       id: shipmentId,
//       status: "Delivered",
//     });
//   });
// }

// function handleError(error) {
//   console.log("Error:", error);
// }
// getUser(userId)
//   .then(function (user) {
//     getOrders(user.id);
//   })
//   .then(function (orders) {
//     getOrderDetails(orders[0].id);
//   })
//   .then(function (details) {
//     getShipment(details.shipmentId);
//   })
//   .then(function (shipment) {
//     console.log(shipment);
//   })
//   .catch(function (error) {
//     handleError(error);
//   });

//   mobileInput()
//   .then(connectionSpeed)
//   .then(webcamAccess)
//   .then(shareScreen)
//   .then(testStarted)
//   .catch((error) => {
//     console.lor(error);
//   });

// async function data() {

//     const a = await fetch("a");

//     const b = await fetch(`b?x=${a.id}`);

//     const c = await fetch(`c?y=${b.id}`);

//     console.log(c);

// }
let quote = fetch("https://dogapi.dog/api/v1/facts")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.facts);
  });
