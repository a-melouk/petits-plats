//Get all the ingredients from a given recipes array
export function getAllIngredients(recipes) {
  let result = [];
  recipes.map(recipe => {
    recipe.ingredients.map(ingredient => {
      result.push(ingredient.ingredient.toLowerCase());
    });
  });
  result = [...new Set(result)].sort();
  return result;
}

//Ingredient menu search
export function ingredientSearch() {
  const history = JSON.parse(sessionStorage.getItem('history'));

  // const currentDisplayedRecipes = history[history.length - 1]
  const currentDisplayedRecipes = history[0];
  const currentIngredients = getAllIngredients(currentDisplayedRecipes);
  const ingredientsSearchInput = document.getElementById('ingredient');
  const resetInput = ingredientsSearchInput.nextElementSibling;
  resetInput.addEventListener('click', () => {
    ingredientsSearchInput.value = '';
    const ingredientsMenuItems = document.querySelectorAll('.menu.ingredients .menu__item');
    ingredientsMenuItems.forEach(item => {
      item.classList.remove('hidden');
    });
  });
  ingredientsSearchInput.addEventListener('keyup', () => {
    const value = ingredientsSearchInput.value.toLowerCase();
    const filteredIngredients = currentIngredients.filter(ingredient => ingredient.includes(value));
    const ingredientsMenuItems = document.querySelectorAll('.menu.ingredients .menu__item');
    ingredientsMenuItems.forEach(item => {
      if (!filteredIngredients.includes(item.querySelector('button').textContent)) item.classList.add('hidden');
      else item.classList.remove('hidden');
    });
  });
}
