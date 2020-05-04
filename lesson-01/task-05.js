let country = prompt("What country are you living in?");

const capitalizedCountry = country.toUpperCase();

switch (capitalizedCountry) {
  case "CHINA":
    console.log(
      `Delivery to your ${capitalizedCountry} will be cost 100 credits`
    );
    break;
  case "CHILE":
    console.log(
      `Delivery to your ${capitalizedCountry} will be cost 250 credits`
    );
    break;
  case "AUSTRALIA":
    console.log(
      ` Delivery to your ${capitalizedCountry} will be cost 170 credits`
    );
    break;
  case "INDIA":
    console.log(
      ` Delivery to your ${capitalizedCountry} will be cost 80 credits`
    );
    break;
  case "JAMAICA":
    console.log(
      `Delivery to your ${capitalizedCountry} will be cost 120 credits`
    );
    break;
  default:
    alert(`There is no delivery to your country ${capitalizedCountry}`);
}
