const name = "Aldiyar";
const birthYear = 2007;
const age = 2026 - Number(birthYear);
console.log(`My name is ${name}`)
console.log(`and i am ${age} years old`)

let a = prompt("Введите сумму покупки")
let b = prompt("Введите количество товара")
let c = a / b
console.log(`Вы купили ${b} товаров, по цене ${a} ,по цене ${c} за единицу`)