export function searchRecipesByTitleIngredientsDescription(recipes, searchValue) {
  searchValue = searchValue.toLowerCase();
  const result = [];
  const length = recipes.length;
  const existingIds = [];
  for (let i = 0; i < length; i++) {
    const recipe = recipes[i];
    const ingredientsLength = recipe.ingredients.length;
    //Search in ingredients
    for (let j = 0; j < ingredientsLength; j++) {
      const ingredient = recipe.ingredients[j];
      if (ingredient.ingredient.toLowerCase() === searchValue && !existingIds.includes(recipe.id)) {
        existingIds.push(recipe.id);
        result.push(recipe);
        break;
      }
    }
    //Search in title and description
    if ((recipe.name.toLowerCase().includes(searchValue) || recipe.description.toLowerCase().includes(searchValue)) && !existingIds.includes(recipe.id)) {
      existingIds.push(recipe.id);
      result.push(recipe);
    }
  }
  return result;
}
