const bankAccount = {
  owner: "roopansh",
  balance: 0,
  deposit(amt) {
    this.balance += amt;
  },
  withdraw(amt) {
    if (this.balance < amt) {
      console.log("insufficient balance");
    } else {
      this.balance -= amt;
    }
  },
};

// never use  arrow function when u want to use this keyword

console.log(bankAccount.balance);
bankAccount.deposit(500);
console.log(bankAccount.balance);
bankAccount.withdraw(5000);
bankAccount.withdraw(490);
console.log(bankAccount.balance);
