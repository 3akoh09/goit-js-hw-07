function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Отримуємо посилання на кнопку і span
const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

// Додаємо обробник події click на кнопку
changeColorButton.addEventListener('click', () => {
  // Генеруємо новий випадковий колір
  const newColor = getRandomHexColor();

  // Задаємо новий колір фону для body
  document.body.style.backgroundColor = newColor;

  // Виводимо цей колір у span
  colorSpan.textContent = newColor;
});