let input;
let total = 0;
let count = 1;

while (count > 0) {
  input = prompt("Please enter number");
  if (input === null) {
    alert(`The total number is ${total}`);
    break;
  } else if (isNaN(input)) {
    alert("It isn`t a number, enter a number please");
  } else {
    total = total + parseInt(input);
  }
  count++;
}
