function searchRecipesByTitle(recipes, searchValue) {
  let result = [];
  recipes.map(recipe => {
    if (recipe.name.toLowerCase().includes(searchValue.toLowerCase())) result.push(recipe);
  });
  return [...new Set(result)];
}

function searchRecipesByIngredient(recipes, searchValue) {
  let result = [];
  recipes.map(recipe => {
    recipe.ingredients.map(ingredient => {
      // if (ingredient.ingredient.toLowerCase().includes(searchValue.toLowerCase())) result.push(recipe)
      if (ingredient.ingredient.toLowerCase() === searchValue.toLowerCase()) result.push(recipe);
    });
  });
  return [...new Set(result)];
}

function searchRecipesByDescription(recipes, searchvalue) {
  let result = [];
  recipes.map(recipe => {
    if (recipe.description.toLowerCase().includes(searchvalue.toLowerCase())) result.push(recipe);
  });
  return [...new Set(result)];
}

export function searchRecipesByTitleIngredientsDescription(recipes, search) {
  const tempTitle = searchRecipesByTitle(recipes, search);
  const tempIngredients = searchRecipesByIngredient(recipes, search);
  const tempDescription = searchRecipesByDescription(recipes, search);

  let temp = [...tempTitle, ...tempIngredients, ...tempDescription];
  return [...new Set(temp)];
}
