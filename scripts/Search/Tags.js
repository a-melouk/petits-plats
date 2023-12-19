export function searchRecipesByTags(recipes, tags) {
  return recipes.filter(recipe => {
    const recipeIngredients = recipe.ingredients.map(ingredient => ingredient.ingredient.toLowerCase());
    const recipeUstensils = recipe.ustensils.map(ustensil => ustensil.toLowerCase());
    let [hasAllIngredients, hasCorrectAppliance, hasAllUtensils] = [false, false, false];

    if (tags.ingredients.length === 0 && tags.appliances.length === 0 && tags.ustensils.length === 0) return recipes;
    else {
      if (tags.ingredients.length === 0) hasAllIngredients = true;
      else hasAllIngredients = tags.ingredients.every(ingredient => recipeIngredients.includes(ingredient.toLowerCase()));

      if (tags.appliances.length === 0) hasCorrectAppliance = true;
      else hasCorrectAppliance = recipe.appliance.toLowerCase() === tags.appliances[0].toLowerCase();

      if (tags.ustensils.length === 0) hasAllUtensils = true;
      else hasAllUtensils = tags.ustensils.every(ustensil => recipeUstensils.includes(ustensil.toLowerCase()));
    }

    return hasAllIngredients && hasAllUtensils && hasCorrectAppliance;
  });
}
