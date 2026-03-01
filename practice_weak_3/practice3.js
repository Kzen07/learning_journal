// День 1: Селекторы и манипуляции
const form = document.querySelector('#loginForm'); // Выбор формы
const emailInput = document.querySelector('#email'); // Выбор input
const passwordInput = document.querySelector('#password');
const messageDiv = document.querySelector('#message'); // Для вывода сообщений

// День 2: События (input для real-time, submit для отправки, click если нужно)
emailInput.addEventListener('input', (e) => {
    // Real-time манипуляция: если email пустой — добавь класс error
    if (e.target.value.trim() === '') {
        emailInput.classList.add('error'); // День 1: classList
        emailInput.style.borderColor = 'red'; // День 1: style
    } else {
        emailInput.classList.remove('error');
        emailInput.style.borderColor = ''; // Сброс
    }
});

// День 3: Формы и валидация (submit с preventDefault и e.target.value)
form.addEventListener('submit', (e) => {
    e.preventDefault(); // День 3: Остановить default (reload)

    const email = emailInput.value.trim(); // День 3: e.target.value (здесь через селектор, но можно e.target.email)
    const password = passwordInput.value.trim();

    // Валидация
    if (!email.includes('@') || password.length < 6) {
        messageDiv.innerHTML = '<p class="error">Неверный email или пароль короче 6 символов!</p>'; // День 1: innerHTML для HTML
        messageDiv.classList.add('error'); // День 1: classList
    } else {
        messageDiv.innerHTML = '<p class="success">Форма валидна! Отправляем на API...</p>';
        messageDiv.classList.add('success');

        // Симуляция fetch на backend (в реальности — await fetch('/api/login', { method: 'POST', body: JSON.stringify({email, password}) }))
        console.log('Данные:', { email, password });
    }
});