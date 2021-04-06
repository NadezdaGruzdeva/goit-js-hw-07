const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulEl = document.querySelector('ul#ingredients');
ingredients.forEach(ingredient => {
    console.log(ingredient);
    const liEl = document.createElement('li');
    liEl.textContent = ingredient;
ulEl.append(liEl);
});
