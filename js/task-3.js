// Отримуємо посилання на input та span
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// Додаємо обробник події input на поле вводу
nameInput.addEventListener('input', () => {
  // Отримуємо значення з input, видаляючи пробіли по краях
  const trimmedValue = nameInput.value.trim();

  // Якщо значення порожнє або містить лише пробіли, виводимо "Anonymous", інакше - введене ім'я
  nameOutput.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
});