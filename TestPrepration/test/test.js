// function inc(num) {
//   if (num > 5) {
//     return;
//   }

//   console.log(num);

//   inc(num + 1);
// }

// function dec(num) {
//   if (num == 0) {
//     return;
//   }

//   console.log(num);

//   dec(num - 1);
// }

// inc(1);

// dec(5);

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    if (j == 1 || j == i || i == 4) {
      row += "* ";
    } else {
      row += "  ";
    }
  }

  console.log(row);
}
