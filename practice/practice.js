// =============================================
// Неделя 1: переменные, условия, циклы, функции, массивы
// Неделя 2: стрелочные функции, объекты, spread/rest, array methods
// Неделя 3: DOM, события, формы, валидация, preventDefault
// =============================================

// День 1 → const/let, типы
const todoForm = document.querySelector('#todoForm');
const taskInput = document.querySelector('#taskInput');
const message = document.querySelector('#message');
const taskList = document.querySelector('#taskList');

let tasks = []; // массив объектов задач

// День 4 → функция (declaration) + return
function showMessage(text, type = 'info') {
    message.textContent = text;
    message.className = `message ${type}`;
}

// День 1 → стрелочная функция + условия
const validateTask = (text) => {
    if (typeof text !== 'string') return false;
    if (text.trim().length < 3) return false;
    return true;
};

// День 2 → объект + метод
const createTask = (text) => ({
    id: Date.now(),
    text: text.trim(),
    completed: false,
    toggleCompleted() {
        this.completed = !this.completed;
    }
});

// День 3 → событие input + e.target.value + classList
taskInput.addEventListener('input', (e) => {
    const value = e.target.value.trim();

    if (value.length === 0) {
        showMessage('', 'info');
        taskInput.classList.remove('error', 'success');
    } else if (value.length < 3) {
        showMessage('Минимум 3 символа', 'error');
        taskInput.classList.add('error');
        taskInput.classList.remove('success');
    } else {
        showMessage('Можно добавить!', 'success');
        taskInput.classList.add('success');
        taskInput.classList.remove('error');
    }
});

// День 3 → submit + preventDefault + e.target.value
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = taskInput.value.trim();

    if (!validateTask(text)) {
        showMessage('Задача слишком короткая!', 'error');
        taskInput.focus();
        return;
    }

    // День 2 → spread + объект
    const newTask = createTask(text);
    tasks = [...tasks, newTask]; // spread вместо push

    renderTasks();
    taskInput.value = '';
    showMessage('Задача добавлена!', 'success');
});

// День 2 + Неделя 1 → .forEach, .map, .find, .filter
const renderTasks = () => {
    taskList.innerHTML = ''; // очищаем

    // Неделя 2: .forEach
    tasks.forEach(task => {
        const li = document.createElement('li');

        // Неделя 2: template literal + условный стиль
        li.innerHTML = `
      <span class="${task.completed ? 'completed' : ''}">
        ${task.text}
      </span>
      <button data-id="${task.id}">Удалить</button>
    `;

        // День 2 → событие клика по тексту (toggle)
        li.querySelector('span').addEventListener('click', () => {
            task.toggleCompleted();
            renderTasks();
        });

        // День 2 → событие удаления (динамический элемент)
        li.querySelector('button').addEventListener('click', () => {
            // Неделя 2: .filter
            tasks = tasks.filter(t => t.id !== task.id);
            renderTasks();
            showMessage('Задача удалена', 'error');
        });

        taskList.appendChild(li);
    });

    // Неделя 1: цикл + условие (пример использования старого знания)
    let completedCount = 0;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].completed) completedCount++;
    }
    if (completedCount > 0 && completedCount === tasks.length) {
        showMessage(`Все задачи выполнены! (${completedCount}/${tasks.length})`, 'success');
    }
};

// Инициализация
renderTasks();