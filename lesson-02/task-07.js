const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  return login.length >= "4" && login.length <= "16" ? true : false;
};

const isLoginUnique = function (allLogins, login) {
  return allLogins.includes(login) ? false : true;
};

const addLogin = function (allLogins, login) {
  if (isLoginValid(login)) {
    if (isLoginUnique(allLogins, login)) {
      allLogins.push(login);
      return "New login was successfully added";
    } else {
      return "Such login is already used";
    }
  } else {
    return "Error! Login should be from 4 to 16 characters";
  }
};

console.log(addLogin(logins, "jqueryisextremelyfast"));
