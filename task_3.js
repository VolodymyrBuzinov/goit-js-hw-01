const message = prompt("Password");
const ADMIN_PASSWORD = "jqueryismyjam";
const WELCOME = "Добро пожаловать!";
const DENIED = "Отменено пользователем!";
const RESTRICTED = "Доступ запрещен, неверный пароль!";
let messageAlert;
console.log(message);
if (message === null) {
  messageAlert = DENIED;
} else if (message === ADMIN_PASSWORD) {
  messageAlert = WELCOME;
} else {
  messageAlert = RESTRICTED;
}

alert(messageAlert);
