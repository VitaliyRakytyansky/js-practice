let chinaPrice = 100;
let chilePrice = 250;
let australiaPrice = 170;
let indiaPrice = 80;
let jamaicaPrice = 120;

let country = prompt("What country are you living in?");

let capitalizedCountry =
  country[0].toUpperCase() + country.slice(1).toLowerCase();

switch (capitalizedCountry) {
  case "China":
    console.log(
      `Delivery to your ${capitalizedCountry} will be cost ${chinaPrice} credits`
    );
    break;
  case "Chile":
    console.log(
      `Delivery to your ${capitalizedCountry} will be cost ${chilePrice} credits`
    );
    break;
  case "Australia":
    console.log(
      ` Delivery to your ${capitalizedCountry} will be cost ${australiaPrice} credits`
    );
    break;
  case "India":
    console.log(
      ` Delivery to your ${capitalizedCountry} will be cost ${indiaPrice} credits`
    );
    break;
  case "Jamaica":
    console.log(
      `Delivery to your ${capitalizedCountry} will be cost ${jamaicaPrice} credits`
    );
    break;
  default:
    alert(`There is no delivery to your country ${capitalizedCountry}`);
}
