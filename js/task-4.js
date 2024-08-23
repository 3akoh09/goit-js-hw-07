// Отримуємо посилання на форму за класом
const form = document.querySelector('.login-form');

// Додаємо обробник події submit на форму
form.addEventListener('submit', (event) => {
  // Запобігаємо перезавантаженню сторінки при сабміті форми
  event.preventDefault();

  // Отримуємо посилання на всі елементи форми
  const { email, password } = event.currentTarget.elements;

  // Очищаємо значення полів від пробілів
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // Перевіряємо, чи заповнені всі поля
  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
    return;
  }

  // Створюємо об'єкт з даними форми
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  // Виводимо об'єкт у консоль
  console.log(formData);

  // Очищаємо поля форми після сабміту
  form.reset();
});
