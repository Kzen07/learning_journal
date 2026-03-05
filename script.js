const taskInput = document.querySelector('#taskInput');
const todoForm = document.querySelector('#todoForm');
const taskList = document.querySelector('#taskList');
const message = document.querySelector('#message');
const counter = document.querySelector('#counter');
const clearAllBtn = document.querySelector('#clearAllBtn');

let tasks = [];

// ==================== ФУНКЦИИ ====================

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const saved = localStorage.getItem('tasks');
    if (saved) {
        tasks = JSON.parse(saved);
    }
}

function updateCounter() {
    const total = tasks.length;
    const done = tasks.filter(t => t.completed).length;
    counter.textContent = `Задач: ${total} / Выполнено: ${done}`;
}

function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.text;

        if (task.completed) {
            li.classList.add('completed');
        }

        // Клик по тексту — отметка выполненной
        li.addEventListener('click', () => {
            task.completed = !task.completed;
            saveTasks();
            renderTasks();
            updateCounter();
        });

        // Кнопка удаления
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Удалить';
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            tasks = tasks.filter(t => t.id !== task.id);
            saveTasks();
            renderTasks();
            updateCounter();
            message.textContent = 'Задача удалена';
            setTimeout(() => message.textContent = '', 1500);
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });

    updateCounter();
}

// ==================== СОБЫТИЯ ====================

taskInput.addEventListener('input', () => {
    if (taskInput.value.trim() === '') {
        message.textContent = '';
    }
});

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = taskInput.value.trim();

    if (text.length < 3) {
        message.textContent = 'Задача должна быть минимум 3 символа!';
        return;
    }

    const newTask = {
        id: Date.now(),
        text: text,
        completed: false
    };

    tasks.push(newTask);
    saveTasks();
    renderTasks();

    taskInput.value = '';
    message.textContent = 'Задача добавлена!';
    setTimeout(() => message.textContent = '', 1500);
});

// Очистить всё
clearAllBtn.addEventListener('click', () => {
    if (confirm('Очистить весь список?')) {
        tasks = [];
        saveTasks();
        renderTasks();
        message.textContent = 'Список очищен';
        setTimeout(() => message.textContent = '', 1500);
    }
});

// ==================== ЗАПУСК ====================

loadTasks();
renderTasks();