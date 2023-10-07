const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ul = document.getElementById("ingredients");
const ingredientList = ingredients.map(ingredient => `<li class="item">${ingredient}</li>`).join('');
ul.insertAdjacentHTML("beforeend", ingredientList);
console.log(ul);