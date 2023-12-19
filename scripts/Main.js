import recipes from '../data/recipes.mjs';
import { generateMenu } from './GenerateMenu.js';
import { ingredientSearch } from './Ingredient.js';
import { applianceSearch } from './Appliance.js';
import { ustensilSearch } from './Ustensil.js';
import { menuShowHide } from './Menu.js';
import { generateRecipeCard } from './RecipeCard.js';
import { searchBox } from './SearchBar.js';

function yieldToMain() {
  return new Promise(resolve => {
    setTimeout(resolve, 1000);
  });
}

function initSessionStorage() {
  sessionStorage.setItem('recipes', JSON.stringify([recipes]));
  sessionStorage.setItem('history', JSON.stringify([recipes]));
  sessionStorage.setItem('searchBar', JSON.stringify([recipes]));
  sessionStorage.setItem('tags', JSON.stringify({ ingredients: [], appliances: [], ustensils: [] }));
}

function step0() {
  generateRecipeCard(recipes);
}

function step1() {
  initSessionStorage();
}

function step2() {
  generateMenu(recipes, 'ingredients');
  generateMenu(recipes, 'appliances');
  generateMenu(recipes, 'ustensils');
}

function step3() {
  menuShowHide('ingredients');
  menuShowHide('appliances');
  menuShowHide('ustensils');
}

function step4() {
  ingredientSearch();
  applianceSearch();
  ustensilSearch();
  searchBox();
}

async function saveSettings() {
  // Create an array of functions to run:
  // const tasks = [a, b, c, d, e, f]
  const tasks = [step1, step0, step2, step3, step4];

  // Loop over the tasks:
  while (tasks.length > 0) {
    // Shift the first task off the tasks array:
    const task = tasks.shift();

    // Run the task:
    task();

    // Yield to the main thread:
    await yieldToMain();
  }
}

saveSettings();
