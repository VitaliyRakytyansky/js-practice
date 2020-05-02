let credits = 23580;
let pricePerDroid = 3000;
let droidQuantity;
let totalPrice;

droidQuantity = prompt("How many droids do you want to buy?");

if (droidQuantity === null) {
  console.log("Canceled by user");
} else {
  totalPrice = droidQuantity * pricePerDroid;
  if (totalPrice > credits) {
    console.log("Not enough money");
  } else {
    let accountBalance = credits - totalPrice;
    console.log(
      `You've just bought ${droidQuantity}, left on account ${accountBalance}`
    );
  }
}
