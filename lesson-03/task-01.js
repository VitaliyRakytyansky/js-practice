// =========================================
// Task-01
// =========================================

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (let key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}

// ========================================
// Task-02
// =========================================

const countProps = function (obj) {
  return Object.entries(obj).length;
};

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// =========================================
// Task-03
// =========================================

const findBestEmployee = function (employee) {
  let count = 0;
  const result = [];
  for (let value of Object.values(employee)) {
    if (value > count) {
      count = value;
    }
  }
  Object.keys(employee).forEach((key) => {
    if (employee[key] === count) {
      result.push(key);
    }
  });

  return result[0];
};

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

// =========================================
// Task-04
// =========================================

const countTotalSalary = function (employees) {
  let total = 0;
  Object.values(employees).forEach((value) => {
    total += value;
  });

  return total;
};

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400 cents coups

// =========================================
// Task-05
// =========================================

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  let propValues = [];
  arr.forEach((entry) => {
    if (entry.hasOwnProperty(prop)) {
      propValues.push(entry[prop]);
    } else return [];
  });
  return propValues;
};

console.log(getAllPropValues(products, "name"));

// =========================================
// Task-06
// =========================================

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (arr, productName) {
  const product = arr.find((item) => item.name === productName);
  return product.price * product.quantity;
};
console.log(calculateTotalPrice(products, "Дроид"));
