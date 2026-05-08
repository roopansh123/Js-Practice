class User {
  #email;
  constructor(username, email) {
    this.username = username;
    this.#email = email;
  }

  sendEmail(msg) {
    console.log("message is sent");
  }

  updateEmail(newEmail) {
    this.email = newEmail;
  }

  getEmail() {
    console.log(this.#email);
  }
}

const roopansh = new User("roopansh", "roopanshsethi29@gmail.com");

roopansh.getEmail();
