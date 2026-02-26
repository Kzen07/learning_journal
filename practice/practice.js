// Менеджер задач — Чистая версия после первой недели

let tasks = [];

function addTask() {
    const name = prompt("Название задачи:");
    if (!name) {
        console.log("❌ Название не может быть пустым!");
        return;
    }

    const priority = prompt("Приоритет (низкий / средний / высокий):")?.toLowerCase() || "средний";

    tasks.push({
        name,
        priority,
        completed: false
    });

    console.log(`✅ Задача добавлена: "${name}" (${priority})`);
}

const showTasks = () => {
    tasks.length === 0 ? console.log("📭 Задач пока нет.") : console.log("📋 Список всех задач:");
}

showTasks();
for (let i = 0; i < tasks.length; i++) {
    const status = tasks[i].completed ? "✅ Выполнено" : "⭕ Не выполнено";
    console.log(`${i + 1}. ${tasks[i].name} | Приоритет: ${tasks[i].priority} | ${status}`);
}

function markCompleted() {
    const index = +prompt("Введите номер задачи для отметки как выполненной:") - 1;

    if (index >= 0 && index < tasks.length) {
        tasks[index].completed = true;
        console.log(`✅ Задача "${tasks[index].name}" отмечена выполненной!`);
    } else {
        console.log("❌ Неверный номер задачи!");
    }
}

const deleteTasks = () => {
    const index = +prompt("Введите номер задачи для удаления:") - 1;
    if (index >= 0 && index < tasks.length) {
        const deleted = tasks.splice(index, 1)[0];
        console.log(`🗑 Задача "${deleted.name}" удалена.`);
    } else {
        console.log("❌ Неверный номер задачи!");
    }
}

function showStatistics() {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;

    console.log(`📊 Статистика:
Всего задач: ${total}
Выполнено: ${completed}
Осталось: ${pending}`);
}

// Главное меню
let choice;
do {
    choice = +prompt(`=== Менеджер задач ===

1. Добавить задачу
2. Показать все задачи
3. Отметить как выполненную
4. Удалить задачу
5. Статистика
6. Выход

Ваш выбор:`);

    if (choice === 1) addTask();
    else if (choice === 2) showTasks();
    else if (choice === 3) markCompleted();
    else if (choice === 4) deleteTask();
    else if (choice === 5) showStatistics();
    else if (choice === 6) console.log("👋 До свидания!");
    else console.log("❌ Неверный выбор! Введите число от 1 до 6.");

} while (choice !== 6);

// День 1 — Исправленная версия

// Задача 1
const sum = (a, b) => a + b;
const isAdult = (age) => age >= 18;
const greet = (name) => `Привет, ${name}!`;

// Задача 2
const showUserInfo = (name, age, city) => {
    console.log(`Имя: ${name}, Возраст: ${age}, Город: ${city}`);
};

// Задача 3 — Короткий и чистый вариант
const calculateDiscount = (sum) =>
    sum >= 10000 ? sum * 0.85 :
        sum >= 5000 ? sum * 0.90 :
            sum;

// Задача 4 — Правильный вариант
const users = [
    { id: 1, name: "Айдар", active: true },
    { id: 2, name: "Мади", active: false },
    { id: 3, name: "Алина", active: true }
];

const activeNames = users
    .filter(user => user.active)
    .map(user => user.name);

console.log(activeNames); // ["Айдар", "Алина"]

// Задача 5 — Ещё короче
const createMessage = (username, message) =>
    `Пользователь ${username} отправил сообщение: ${message}`;

console.log(createMessage("Айдар", "Привет"));

// Day 2 

//exercise 1 
let smartphone = {
    brand: "Samsung",
    model: "Galaxy S25",
    price: 450000,
    specs: { ram: 12, storage: 256, camera: 200 },

};
const getFullName = () => {
    `${smartphone.brand} ${smartphone.model}`;
}

// Exercise 2 
request = () => {
    `${smartphone.brand} ${smartphone.model}`
}
smartphoneSettings = () => {
    `${smartphone.specs?.ram} ${smartphone.specs?.storage}`
}
smartphone.push({ color: "black" })

//Exercise 3 
const describe = () => {
    `${this.brand} ${this.model} ${this.specs.ram} ${this.specs.storage} ${this.specs.camera} ${this.color}`
}
// Exercise 4
const apiResponse = {
    status: "success",
    data: {
        user: {
            id: 245,
            fullName: "Иван Иванов",
            email: "ivan@example.com",
            settings: {
                theme: "dark",
                language: "ru"
            }
        }
    }
};
info = () => {
    `${apiResponse.data.user.fullName} ${apiResponse.data.user.settings.theme} ${apiResponse.data.user.settings.language}`
}
// Exercise 5
const printPhoneInfo = () => {
    `${smartphone.brand} ${smartphone.model} ${smartphone.specs.ram} ${smartphone.specs.storage} ${smartphone.specs.camera} ${smartphone.color}`
}


