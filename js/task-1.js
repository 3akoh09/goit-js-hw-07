// Отримуємо всі елементи з класом 'item' всередині 'ul#categories'
const categories = document.querySelectorAll('#categories .item');

// Виводимо в консоль кількість категорій
console.log('Number of categories:', categories.length);

// Перебираємо кожен елемент категорії
categories.forEach(category => {
  // Отримуємо назву категорії з елемента <h2>
  const title = category.querySelector('h2').textContent;

  // Отримуємо кількість елементів <li> всередині кожної категорії
  const elementsCount = category.querySelectorAll('ul li').length;

  // Виводимо в консоль назву категорії
  console.log('Category:', title);

  // Виводимо в консоль кількість елементів у категорії
  console.log('Elements:', elementsCount);
});