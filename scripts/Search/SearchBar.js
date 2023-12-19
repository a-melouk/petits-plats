function searchRecipesByCategory(recipes, searchValue, category) {
  const result = [];
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    if (recipe[category].toLowerCase().includes(searchValue.toLowerCase())) {
      result.push(recipe);
    }
  }
  return result;
}

function searchRecipesByIngredient(recipes, searchValue) {
  const result = [];
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    for (let j = 0; j < recipe.ingredients.length; j++) {
      const ingredient = recipe.ingredients[j];
      if (ingredient.ingredient.toLowerCase() === searchValue.toLowerCase()) {
        result.push(recipe);
        break;
      }
    }
  }
  return result;
}

export function searchRecipesByTitleIngredientsDescription(recipes, search) {
  const searchValue = search.toLowerCase();

  const tempTitle = searchRecipesByCategory(recipes, searchValue, 'name');
  const tempIngredients = searchRecipesByIngredient(recipes, searchValue);
  const tempDescription = searchRecipesByCategory(recipes, searchValue, 'description');

  const tempResult = [...new Set([...tempTitle, ...tempIngredients, ...tempDescription])];
  return tempResult;
}
