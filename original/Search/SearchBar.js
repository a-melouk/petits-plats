function searchRecipesByCategory(recipes, searchValue, category) {
  return recipes.filter(recipe => recipe[category].toLowerCase().includes(searchValue.toLowerCase()));
}

function searchRecipesByIngredient(recipes, searchValue) {
  return recipes.filter(recipe => recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(searchValue.toLowerCase())));
}

export function searchRecipesByTitleIngredientsDescription(recipes, search) {
  const searchValue = search.toLowerCase();

  const tempTitle = searchRecipesByCategory(recipes, searchValue, 'name');
  const tempIngredients = searchRecipesByIngredient(recipes, searchValue);
  const tempDescription = searchRecipesByCategory(recipes, searchValue, 'description');

  const tempResult = [...tempTitle, ...tempIngredients, ...tempDescription];
  return [...new Set(tempResult)];
}
