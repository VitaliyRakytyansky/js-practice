let input;
const numbers = [];
let total = 0;
let count = 1;

while (count > 0) {
  input = prompt("Please, type a number");
  numbers.push(input);
  if (isNaN(input)) {
    numbers.pop();
    alert("It isn`t a number, enter a number please");
  } else if ((input === null) & (numbers !== null)) {
    numbers.pop();
    for (let element of numbers) {
      total = total + parseInt(element);
    }
    console.log(`The sum is ${total}`);
    break;
  }

  count++;
}
