let message;
const ADMIN_PASSWORD = "jqueryismyjam";

message = prompt();
if (message === null) {
  message = "Canceled by user";
} else if (message === ADMIN_PASSWORD) {
  message = "Welcome";
} else {
  message = "Access denied, wrong password";
}

alert(message);
