// Получаем кнопку и корневой элемент
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

// Проверяем, есть ли сохранённая тема в localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    root.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️ Светлая тема';
}

// Переключение темы по клику
themeToggle.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme') || 'light';
    if (currentTheme === 'dark') {
        root.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙 Тёмная тема';
    } else {
        root.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️ Светлая тема';
    }
});
