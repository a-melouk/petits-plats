export function searchRecipesByTags(recipes, tags) {
  return recipes.filter(recipe => {
    // Create arrays of ingredients and ustensils in lowercase
    const recipeIngredients = recipe.ingredients.map(ingredient => ingredient.ingredient.toLowerCase());
    const recipeUstensils = recipe.ustensils.map(ustensil => ustensil.toLowerCase());

    let [hasAllIngredients, hasCorrectAppliance, hasAllUtensils] = [false, false, false];

    // If no tags are selected, return all recipes
    if (tags.ingredients.length === 0 && tags.appliances.length === 0 && tags.ustensils.length === 0) return recipes;
    else {
      //If there's no ingredients selected, hasAllIngredients is true
      if (tags.ingredients.length === 0) hasAllIngredients = true;
      //Else, check if all ingredients are in the recipe
      else hasAllIngredients = tags.ingredients.every(ingredient => recipeIngredients.includes(ingredient.toLowerCase()));
      //If there's no appliance selected, hasCorrectAppliance is true
      if (tags.appliances.length === 0) hasCorrectAppliance = true;
      //Else, check if the appliance is the same as in the recipe
      else hasCorrectAppliance = recipe.appliance.toLowerCase() === tags.appliances[0].toLowerCase();
      //If there's no ustensils selected, hasAllUtensils is true
      if (tags.ustensils.length === 0) hasAllUtensils = true;
      //Else, check if all ustensils are in the recipe
      else hasAllUtensils = tags.ustensils.every(ustensil => recipeUstensils.includes(ustensil.toLowerCase()));
    }

    return hasAllIngredients && hasAllUtensils && hasCorrectAppliance;
  });
}
