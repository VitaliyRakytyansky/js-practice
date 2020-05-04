let names = ["Mango", "Poly", "Ajax"];

const logsItems = function (names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`${i + 1} - ${names[i]}`);
  }
};

logsItems(names);
