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
  //Get the recipes
  const history = JSON.parse(sessionStorage.getItem('history'));
  const currentDisplayedRecipes = history[0];

  // const currentDisplayedRecipes = history[history.length - 1]
  const currentIngredients = getAllIngredients(currentDisplayedRecipes);
  //Get the input for the ingredient search
  const ingredientsSearchInput = document.getElementById('ingredient');
  //Get the reset button for ingredient search
  const resetInput = ingredientsSearchInput.nextElementSibling;
  resetInput.addEventListener('click', () => {
    //Reset the input
    ingredientsSearchInput.value = '';
    //Show all the ingredients
    const ingredientsMenuItems = document.querySelectorAll('.menu.ingredients .menu__item');
    ingredientsMenuItems.forEach(item => {
      item.classList.remove('hidden');
    });
  });
  //Filter the ingredients on keyup
  ingredientsSearchInput.addEventListener('keyup', () => {
    //Get the value of the input and make it lowercase
    const value = ingredientsSearchInput.value.toLowerCase();
    //Filter the ingredients that include the value
    const filteredIngredients = currentIngredients.filter(ingredient => ingredient.includes(value));
    //Get all the ingredients menu items
    const ingredientsMenuItems = document.querySelectorAll('.menu.ingredients .menu__item');
    //Hide the ingredients that don't include the value
    ingredientsMenuItems.forEach(item => {
      if (!filteredIngredients.includes(item.querySelector('button').textContent)) item.classList.add('hidden');
      else item.classList.remove('hidden');
    });
  });
}
