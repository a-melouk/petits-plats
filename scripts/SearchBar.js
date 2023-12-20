import recipes from '../data/recipes.mjs';

import { updatePage } from './Utils.js';
import { searchRecipesByTitleIngredientsDescription } from './Search/SearchBar.js';
export function searchBox() {
  let filteredRecipes = [];
  let timeout = null;
  const searchInput = document.getElementById('search-value');
  searchInput.addEventListener('keyup', () => {
    sessionStorage.setItem('tags', JSON.stringify({ ingredients: [], appliances: [], ustensils: [] }));
    // document.querySelector('.chosen-tags').innerHTML = '';
    document.querySelector('.chosen-tags').replaceChildren();
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      if (searchInput.value.length >= 3) {
        const value = searchInput.value;
        filteredRecipes = searchRecipesByTitleIngredientsDescription(recipes, value);
        updatePage(filteredRecipes, 'searchBar');
      } else if (searchInput.value.length < 3) {
        filteredRecipes = recipes;
        updatePage(filteredRecipes, 'searchBar');
      }
    }, 200);
  });

  return filteredRecipes;
}
