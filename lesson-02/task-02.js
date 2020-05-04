const calculateEngravingPrice = function (message, pricePerWord) {
  return message.length * pricePerWord;
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
);
