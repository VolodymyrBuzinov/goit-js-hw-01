const CANCELED_BY_USER = "Отменено пользователем!";
const ACCESS_DENIED = "Недостаточно средств на счету!";
const pricePerDroid = 3000;
let credits = 23580;
let message = prompt("Сколько вы хотите заказать дроидов?");
let orderPieces = Number(message);
let totalPrice = orderPieces * pricePerDroid;
let balanceCredit = credits - totalPrice;
if (orderPieces === 0) {
  message = CANCELED_BY_USER;
  console.log(message);
} else if (totalPrice > credits) {
  console.log((message = ACCESS_DENIED));
} else {
  console.log(
    (message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`)
  );
}
