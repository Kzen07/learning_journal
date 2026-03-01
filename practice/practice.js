// День 1: Селекторы и манипуляции
const todoForm = document.querySelector('#todoForm');
const taskInput = document.querySelector('#taskInput');
const messageDiv = document.querySelector('#message');
const taskList = document.querySelector('#taskList');

// День 2: События (input + submit)
taskInput.addEventListener('input', (e) => {
    const value = e.target.value.trim();

    if (value.length === 0) {
        messageDiv.textContent = '';
        messageDiv.className = '';
    } else if (value.length < 3) {
        messageDiv.textContent = 'Задача слишком короткая (минимум 3 символа)';
        messageDiv.className = 'error';
    } else {
        messageDiv.textContent = 'Готово к добавлению!';
        messageDiv.className = 'success';
    }
});

todoForm.addEventListener('submit', (e) => {
    e.preventDefault(); // День 3: предотвращаем перезагрузку

    const taskText = taskInput.value.trim();

    // День 3: валидация
    if (taskText.length < 3) {
        messageDiv.textContent = 'Введите задачу минимум из 3 символов!';
        messageDiv.className = 'error';
        taskInput.focus();
        return;
    }

    // Создаём новую задачу (День 1: манипуляции DOM)
    const li = document.createElement('li');
    li.innerHTML = `
    <span>${taskText}</span>
    <button type="button">Удалить</button>
  `;

    // Добавляем в список
    taskList.appendChild(li);

    // Очищаем input и сообщение
    taskInput.value = '';
    messageDiv.textContent = 'Задача добавлена!';
    messageDiv.className = 'success';

    // Через 2 секунды убираем сообщение
    setTimeout(() => {
        messageDiv.textContent = '';
        messageDiv.className = '';
    }, 2000);

    // День 2: События на динамически созданные элементы (удаление)
    li.querySelector('button').addEventListener('click', () => {
        li.remove();
        messageDiv.textContent = 'Задача удалена';
        messageDiv.className = 'success';
        setTimeout(() => messageDiv.textContent = '', 1500);
    });

    // День 2 + День 1: отметка выполненной (клик по тексту)
    const span = li.querySelector('span');
    span.addEventListener('click', () => {
        li.classList.toggle('completed');
    });
});