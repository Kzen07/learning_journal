// let a = +prompt("Введите сумму покупки")
// if (a>=10000){
//     a = a - (a * 0.15)
// }
// else if (a>=5000){
//     a = a - (a * 0.10)
// }
// else {
//     console.log("Скидки нет")
// }
// console.log(`Итоговая сумма к оплате: ${a}`)

// const name = prompt("Имя") ?? "Гость";
// const age = +prompt("Возраст") || "Не указан";

// console.log(`Привет, ${name}!`);
// console.log(`Возраст: ${age}`);
// console.log(age >= 18 ? "Совершеннолетний ✅" : "Несовершеннолетний ❌");

// // Level 2 Medium
// const balance = +prompt("Баланс") || 0;
// console.log(balance ? `Баланс: ${balance} ₸` : "Баланс пустой");

// const cost = +prompt("Цена товара") || 0;
// const disc = (+prompt("Скидка %") ?? 0) / 100;
// console.log(`К оплате: ${cost * (1 - disc)} ₸`);

// const role = (prompt("Роль") || "user").toLowerCase();
// console.log(role === "admin" ? "Полный доступ" : role === "moderator" ? "Модерация" : "Просмотр");

// // Уровень 3 — Чистая и современная версия

// // 1. Функция getDiscount (максимально коротко и красиво)
// const getDiscount = (sum) => {
//     const discount = sum >= 10000 ? 0.15 : sum >= 5000 ? 0.10 : 0;
//     const total = sum * (1 - discount);
//     return `К оплате: ${total} ₸ ${discount ? `(скидка ${discount*100}%)` : '(скидки нет)'}`;
// };

// console.log(getDiscount(+prompt("Введите сумму")));


// // 2. Можно ли водить?
// const age2 = +prompt("Введите возраст") || 0;
// const hasLicense = prompt("Есть права? (да/нет)")?.toLowerCase() === "да";

// console.log(age2 >= 18 && hasLicense ? "Можно водить ✅" : "Нельзя водить ❌");


// // 3. Функция приветствия (исправленная и короткая)
// const greet = (user) => {
//     const name = user?.name ?? "Гость";
//     console.log(`Привет, ${name}!`);
// };

// // Примеры использования:
// greet(null);                    // Привет, Гость!
// greet({ name: "Алдияр" });      // Привет, Алдияр!
// greet({});                      // Привет, Гость!


// // 4. Чётное число больше 100
// const num = +prompt("Введите число") || 0;
// console.log(num % 2 === 0 && num > 100 
//     ? "Большое чётное число ✅" 
//     : "Не соответствует условиям");


// // 5. Калькулятор чаевых (очень чисто)
// const bill = +prompt("Сумма счёта") || 0;
// const tipPercent = (+prompt("Процент чаевых") ?? 10) / 100;

// const tipAmount = bill * tipPercent;
// const total = bill + tipAmount;

// console.log(`Счёт: ${bill} ₸ | Чаевые: ${tipAmount} ₸ | Итого: ${total} ₸`);


// // 6. formatPrice (самая чистая версия)
// const formatPrice = (price, currency = "₸") => {
//     if (price == null) return "Цена не указана";   // ловит null и undefined
//     if (price === 0) return "Бесплатно";
//     return `Цена: ${price} ${currency}`;
// };

// console.log(formatPrice(+prompt("Введите цену")));
// console.log(formatPrice(0));
// console.log(formatPrice(null));
const heigh= 10
for (let a=0;a<heigh;a++){
    let row=""
    for (let b=0;b<=a;b++){
        row+="*"
    }
    console.log(row)
}

function biggerone(a,b,c){
    const bigone = (a>b && a>c) ? a : (b>a && b>c) ? b : c
    return bigone
}
const num1 = +prompt("Введите первое число")
const num2 = +prompt("Введите второе число")
const num3 = +prompt("Введите третье число")
console.log(`Наибольшее число: ${biggerone(num1,num2,num3)}`)