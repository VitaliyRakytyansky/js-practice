// =========================================
// Task-01
// =========================================

function Account({ login, email }) {
  this.login = login;
  this.email = email;
}

Account.prototype.getInfo = function () {
  console.log(`Login: ${this.login}, email: ${this.email}`);
};

const mango = new Account({
  login: "Mangosedog",
  email: "mango@dog.woof",
});

mango.getInfo();

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});

poly.getInfo();

// =========================================
// Task-02
// ========================================

class User {
  constructor({ name, age, followers }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
  getInfo() {
    console.log(
      `User ${this.name} is ${this.age} yers old and has ${this.followers}`
    );
  }
}

const mango = new User({
  name: "Mango",
  age: 2,
  followers: 20,
});

mango.getInfo();

const poly = new User({
  name: "Poly",
  age: 3,
  followers: 17,
});

poly.getInfo();

// =========================================
// Task-03
// ========================================

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  removeItems(item) {
    if (this.items.includes(item)) {
      let index = this.items.indexOf(item);
      this.items.splice(index, 1);
    }
  }

  addItems(item) {
    this.items.push(item);
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = storage.getItems();

console.log(items);

storage.addItems("Дроид");
console.log(items);

storage.removeItems("Железные жупи");
console.log(items);

// =========================================
// Task-04
// ========================================

class StringBuilder {
  constructor(value) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  append(str) {
    this.value += str;
  }

  prepend(str) {
    this.value = str + this.value;
  }

  pad(str) {
    this.value = str + this.value + str;
  }
}

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value);

builder.prepend("^");
console.log(builder.value);

builder.pad("=");
console.log(builder.value);

// =========================================
// Task-05
// ========================================

class Car {
  static getSpecs(car) {
    console.log(
      ` maxSpeed: ${car._maxSpeed}, speed: ${car._speed}, isOn:${car._isOn}, distance:${car._distance}, price:${car._price}`
    );
  }

  constructor(car) {
    this._price = car.price;
    this._maxSpeed = car.maxSpeed;
    this._speed = 0;
    this._isOn = false;
    this._distance = 0;
  }

  get price() {
    return this._price;
  }

  set price(price) {
    this._price = price;
  }

  turnOn() {
    this._isOn = true;
  }

  turnOff() {
    this._isOn = false;
    this._speed = 0;
  }

  accelerate(value) {
    if (this._maxSpeed > value + this._speed) {
      this._speed += value;
    }
  }

  decelerate(value) {
    if (this._speed - value > 0) {
      this._speed -= value;
    }
  }

  drive(hours) {
    if (this._isOn === true) {
      this._distance += this._speed * hours;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
//console.log(mustang)

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);
