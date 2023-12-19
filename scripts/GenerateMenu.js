import { searchRecipesByTags } from './Search/Tags.js';
import { getAllIngredients } from './Ingredient.js';
import { getAllAppliances } from './Appliance.js';
import { getAllUstensils } from './Ustensil.js';
import { addChosenTag, updatePage } from './Utils.js';
import { displayChosenTags } from './Menu.js';

export function generateMenu(recipes, category) {
  let tags = JSON.parse(sessionStorage.getItem('tags'));

  const menu = document.querySelector(`.menu.${category} .menu__items`);
  menu.innerHTML = '';
  let items = [];
  switch (category) {
    case 'ingredients':
      items = getAllIngredients(recipes);
      break;
    case 'appliances':
      items = getAllAppliances(recipes);
      break;
    case 'ustensils':
      items = getAllUstensils(recipes);
      break;
  }

  //Remove selected ingredients, ustensils and appliances from items
  if (tags[category].length > 0) {
    tags[category].forEach(tag => {
      items = items.filter(item => item !== tag);
    });
  }

  items.map(item => {
    const listItem = document.createElement('li');
    listItem.classList.add('menu__item');
    listItem.innerHTML = `
      <button>${item}</button>
    `;
    listItem.addEventListener('click', () => {
      const value = listItem.querySelector('button').textContent;
      addChosenTag(category, value);
      tags = JSON.parse(sessionStorage.getItem('tags'));
      const filteredRecipes = searchRecipesByTags(recipes, tags);
      displayChosenTags(item, category);
      updatePage(filteredRecipes, 'history');
    });
    menu.appendChild(listItem);
  });
}
