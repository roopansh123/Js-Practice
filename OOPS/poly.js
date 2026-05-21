class vehicle {
  #speed;
  constructor(brand, speed) {
    this.brand = brand;
    this.#speed = speed;
  }

  accleration(amt) {
    this.#speed += amt;
  }

  brake(amt) {
    this.#speed -= amt;
  }

  getInfo() {
    console.log(
      `car is of brand ${this.brand}, and current speed is ${this.#speed}`,
    );
  }
}

class electricCar extends vehicle {
  #batteryLevel;
  constructor(brand, speed) {
    super(brand, speed);
  }
  charge(amt) {
    this.#batteryLevel += amt;
  }
  getInfo() {
    console.log(
      `the brand of the vechile is ${this.brand} and current speed is ${this.speed} battery level is ${this.#batteryLevel}`,
    );
  }
}

const tirri = new electricCar("tesla", 50);
tirri.getInfo();
