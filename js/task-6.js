function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


// Отримуємо посилання на елементи управління
const inputElement = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

// Функція для створення колекції елементів
function createBoxes(amount) {
  // Очищаємо попередній вміст контейнера
  boxesContainer.innerHTML = '';

  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    size += 10;
  }

  // Додаємо всі елементи за одну операцію
  boxesContainer.append(...boxes);
}

// Функція для очищення колекції елементів
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

// Додаємо обробник події на кнопку "Create"
createButton.addEventListener('click', () => {
  const amount = parseInt(inputElement.value);

  // Перевіряємо чи значення в межах від 1 до 100
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputElement.value = ''; // Очищаємо значення інпуту
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

// Додаємо обробник події на кнопку "Destroy"
destroyButton.addEventListener('click', destroyBoxes);