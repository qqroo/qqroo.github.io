const switchBtn = document.querySelector('.switch input[type="checkbox"]');
const body = document.querySelector('body');
const button = document.querySelector('button');

// Получаем значение из localStorage и устанавливаем состояние темы
const isDarkTheme = localStorage.getItem('isDarkTheme') === 'true';
body.classList.toggle('dark-theme', isDarkTheme);
button.classList.toggle('dark-theme', isDarkTheme);
switchBtn.checked = isDarkTheme;

// Сохраняем состояние темы в localStorage при изменении состояния переключателя
switchBtn.addEventListener('change', function() {
  const isDarkTheme = switchBtn.checked;
  localStorage.setItem('isDarkTheme', isDarkTheme);
  body.classList.toggle('dark-theme', isDarkTheme);
  button.classList.toggle('dark-theme', isDarkTheme);
});
