export function searchRecipesByTitleIngredientsDescription(recipes, searchValue) {
  const result = [];
  //Get the length of recipes one time to avoid calling the length property on each iteration
  const length = recipes.length;
  //Create an array to store the ids of the recipes that are already in the result array
  const existingIds = [];
  for (let i = 0; i < length; i++) {
    const recipe = recipes[i];
    //Get length of ingredients of the recipe one time
    const ingredientsLength = recipe.ingredients.length;
    for (let j = 0; j < ingredientsLength; j++) {
      const ingredient = recipe.ingredients[j];
      //If the ingredient includes searchValue and the recipe is not already in the result array, we add it to the result array and we add the recipe id to the existingIds array and we break the loop to not search for other ingredients of the recipe
      if (ingredient.ingredient.toLowerCase().includes(searchValue.toLowerCase()) && !existingIds.includes(recipe.id)) {
        existingIds.push(recipe.id);
        result.push(recipe);
        break;
      }
    }
    //if the (title OR description) of the recipe includes searchValue AND (the recipe is not already in the result array), we add it to the result array and we add the recipe id to the existingIds array
    if ((recipe.name.toLowerCase().includes(searchValue.toLowerCase()) || recipe.description.toLowerCase().includes(searchValue.toLowerCase())) && !existingIds.includes(recipe.id)) {
      existingIds.push(recipe.id);
      result.push(recipe);
    }
  }
  return result;
}
