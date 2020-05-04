const calculateEngravingoneWordPrice = function (message, pricePerWord) {
  let messageArray = message.trim().split(" ");
  return messageArray.length * pricePerWord;
};

console.log(
  calculateEngravingoneWordPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
);
