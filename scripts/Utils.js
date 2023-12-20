import { generateMenu } from './GenerateMenu.js';
import { generateRecipeCard } from './RecipeCard.js';
import { updateTotalRecipes } from './TotalRecipes.js';

export function containsWord(originalString, wordToTest) {
  wordToTest = wordToTest.toLowerCase();
  originalString = originalString.toLowerCase();
  const regex = new RegExp(`\\b${wordToTest}\\b`, 'g');
  return regex.test(originalString);
}

//Used to store the selected tag with its category
export function addChosenTag(category, tag) {
  const tags = JSON.parse(sessionStorage.getItem('tags'));
  tags[category].push(tag);
  tags[category] = [...new Set(tags[category])];
  sessionStorage.setItem('tags', JSON.stringify(tags));
}

//Used to remove the selected tag with its category from the sessionStorage
export function removeChosenTagFromSelected(category, tag) {
  const tags = JSON.parse(sessionStorage.getItem('tags'));
  tags[category] = tags[category].filter(item => item !== tag);
  sessionStorage.setItem('tags', JSON.stringify(tags));
}

//Used to reset all the tags inputs
function resetInputs() {
  const inputs = document.querySelectorAll('.filter.search-bar input');
  inputs.forEach(input => {
    input.value = '';
  });
}

//Used to save the current recipes in the history or searchBar
function saveCurrentRecipes(recipes, key) {
  const history = JSON.parse(sessionStorage.getItem(key));
  history[0] = recipes;
  sessionStorage.setItem(key, JSON.stringify(history));
}

//Used to update the page with the new recipes
export function updatePage(filteredRecipes, key) {
  generateRecipeCard(filteredRecipes);
  generateMenu(filteredRecipes, 'ingredients');
  generateMenu(filteredRecipes, 'appliances');
  generateMenu(filteredRecipes, 'ustensils');
  updateTotalRecipes(filteredRecipes);

  resetInputs();
  saveCurrentRecipes(filteredRecipes, key);
}
