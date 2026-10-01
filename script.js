document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Recupera o tema salvo pelo usuário ou define 'light' como padrão
    const savedTheme = localStorage.getItem('theme') || 'light';

    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggleBtn.textContent = '☀️';
    } else {
        body.classList.remove('dark-theme');
        themeToggleBtn.textContent = '🌙';
    }

    // Ação do botão ao clicar
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');

        if (body.classList.contains('dark-theme')) {
            themeToggleBtn.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggleBtn.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });
});