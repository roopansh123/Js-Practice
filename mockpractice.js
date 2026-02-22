// /***************************************
//  * QUESTION 1: Ticket Price Calculator
//  ***************************************/

// function calculateTicketPrice(age, isWeekend) {
//   // Validation
//   if (typeof age !== "number" || age < 0 || typeof isWeekend !== "boolean") {
//     return "Invalid Input";
//   }

//   let basePrice;

//   if (age <= 12) {
//     basePrice = 100;
//   } else if (age <= 17) {
//     basePrice = 150;
//   } else if (age <= 59) {
//     basePrice = 200;
//   } else {
//     basePrice = 120;
//   }

//   // Weekend surcharge
//   if (isWeekend) {
//     basePrice = basePrice + (basePrice * 20) / 100;
//   }

//   return basePrice;
// }

// // Test
// console.log(calculateTicketPrice(10, false)); // 100
// console.log(calculateTicketPrice(25, true));  // 240
// console.log(calculateTicketPrice(-1, true));  // Invalid Input


/****************************************
 * QUESTION 2: Password Strength Checker
 ****************************************/

function checkPassword(password) {
  let hasUpperCase = false;
  let hasLowerCase = false;
  let hasNumber = false;
  let hasSpecial = false;

  for (let ch of password) {
    if (ch >= 'A' && ch <= 'Z') {
      hasUpperCase = true;
    } else if (ch >= 'a' && ch <= 'z') {
      hasLowerCase = true;
    } else if (ch >= '0' && ch <= '9') {
      hasNumber = true;
    } else {
      hasSpecial = true;
    }
  }

  let typeCount = 0;
  if (hasUpperCase) typeCount++;
  if (hasLowerCase) typeCount++;
  if (hasNumber) typeCount++;
  if (hasSpecial) typeCount++;

  let strength;
  if (password.length >= 8 && typeCount === 4) {
    strength = "Strong";
  } else if (password.length >= 6 && typeCount >= 2) {
    strength = "Medium";
  } else {
    strength = "Weak";
  }

  return {
    length: password.length,
    hasUpperCase,
    hasLowerCase,
    hasNumber,
    hasSpecial,
    strength
  };
}

// Test
console.log(checkPassword("Abc@1234"));
console.log(checkPassword("hello"));
console.log(checkPassword("abcD12"));


// /****************************************
//  * QUESTION 3: Employee Salary Report
//  ****************************************/

// function generateReport(employees) {
//   let totalEmployees = employees.length;
//   let totalSalary = 0;
//   let totalBonus = 0;
//   let highestSalary = 0;
//   let highestPaid = "";

//   for (let emp of employees) {
//     totalSalary += emp.salary;

//     let bonusPercent;
//     if (emp.yearsWorked <= 2) {
//       bonusPercent = 5;
//     } else if (emp.yearsWorked <= 4) {
//       bonusPercent = 10;
//     } else {
//       bonusPercent = 15;
//     }

//     let bonus = (emp.salary * bonusPercent) / 100;
//     totalBonus += bonus;

//     if (emp.salary > highestSalary) {
//       highestSalary = emp.salary;
//       highestPaid = emp.name;
//     }
//   }

//   let averageSalary = totalSalary / totalEmployees;

//   return {
//     totalEmployees,
//     totalSalary,
//     totalBonus,
//     highestPaid,
//     averageSalary
//   };
// }

// // Test
// const employees = [
//   { name: "Amit", department: "IT", salary: 50000, yearsWorked: 3 },
//   { name: "Priya", department: "HR", salary: 45000, yearsWorked: 5 },
//   { name: "Rahul", department: "IT", salary: 60000, yearsWorked: 2 },
//   { name: "Sneha", department: "Finance", salary: 55000, yearsWorked: 4 }
// ];

// console.log(generateReport(employees));
