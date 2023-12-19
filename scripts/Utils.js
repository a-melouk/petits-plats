import { generateMenu } from './GenerateMenu.js';
import { generateRecipeCard } from './RecipeCard.js';
import { updateTotalRecipes } from './TotalRecipes.js';

export function containsWord(originalString, wordToTest) {
  wordToTest = wordToTest.toLowerCase();
  originalString = originalString.toLowerCase();
  const regex = new RegExp(`\\b${wordToTest}\\b`, 'g');
  return regex.test(originalString);
}

export function addChosenTag(category, tag) {
  const tags = JSON.parse(sessionStorage.getItem('tags'));
  tags[category].push(tag);
  tags[category] = [...new Set(tags[category])];
  sessionStorage.setItem('tags', JSON.stringify(tags));
}

export function removeChosenTagFromSelected(category, tag) {
  const tags = JSON.parse(sessionStorage.getItem('tags'));
  tags[category] = tags[category].filter(item => item !== tag);
  sessionStorage.setItem('tags', JSON.stringify(tags));
}

export function displayRecipe(recipe) {
  const ingredients = [];
  recipe.ingredients.map(ingredient => {
    ingredients.push(ingredient.ingredient);
  });
  console.log(`
  recipe: {
    name:${recipe.name},
    ingredients:${ingredients},
    appliance:${recipe.appliance},
    ustensils:${recipe.ustensils},
  `);
}

function resetInputs() {
  const inputs = document.querySelectorAll('.filter.search-bar input');
  inputs.forEach(input => {
    input.value = '';
  });
}

function saveCurrentRecipes(recipes, key) {
  const history = JSON.parse(sessionStorage.getItem(key));
  history[0] = recipes;
  sessionStorage.setItem(key, JSON.stringify(history));
}

export function updatePage(filteredRecipes, key) {
  generateRecipeCard(filteredRecipes);
  generateMenu(filteredRecipes, 'ingredients');
  generateMenu(filteredRecipes, 'appliances');
  generateMenu(filteredRecipes, 'ustensils');
  updateTotalRecipes(filteredRecipes);

  resetInputs();
  saveCurrentRecipes(filteredRecipes, key);
}
