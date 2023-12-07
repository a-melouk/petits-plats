export function getRecipesByIngredient(recipes, ingredient) {
  const result = []
  recipes.map(recipe => {
    recipe.ingredients.map(ingredients => {
      if (ingredients.ingredient.toLowerCase() === ingredient.toLowerCase()) {
        result.push(recipe)
      }
    })
  })
  return result
}

export function getRecipesByUstensil(recipes, ustensil) {
  let result = []
  recipes.map(recipe => {
    recipe.ustensils.map(ustensils => {
      if (ustensils.toLowerCase() === ustensil.toLowerCase()) {
        result.push(recipe)
      }
    })
  })
}

export function getRecipesByAppliance(recipes, appliance) {
  const result = []
  recipes.map(recipe => {
    if (recipe.appliance.toLowerCase() === appliance.toLowerCase()) {
      result.push(recipe)
    }
  })
  return result
}

export function getRecipesByTitle(recipes, title) {
  const result = []
  recipes.map(recipe => {
    if (recipe.name.toLowerCase().includes(title.toLowerCase())) {
      result.push(recipe)
    }
  })
  return result
}

export function getRecipesByDescription(recipes, description) {
  const result = []
  recipes.map(recipe => {
    if (recipe.description.toLowerCase().includes(description.toLowerCase())) {
      result.push(recipe)
    }
  })
  return result
}

export function getRecipesByTitleIngredientsDescription(recipes, search) {
  const tempTitle = getRecipesByTitle(recipes, search)
  const tempIngredients = getRecipesByIngredient(recipes, search)
  const tempDescription = getRecipesByDescription(recipes, search)

  let temp = [...tempTitle, ...tempIngredients, ...tempDescription]
  const result = [...new Set(temp)]

  return result
}

export function getAllIngredients(recipes) {
  const result = []
  recipes.map(recipe => {
    recipe.ingredients.map(ingredient => {
      result.push(ingredient.ingredient)
    })
  })
  return [...new Set(result)]
}

export function getAllAppliances(recipes) {
  const result = []
  recipes.map(recipe => {
    result.push(recipe.appliance)
  })
  return [...new Set(result)]
}

export function getAllUstensils(recipes) {
  const result = []
  recipes.map(recipe => {
    recipe.ustensils.map(ustensil => {
      result.push(ustensil)
    })
  })
  return [...new Set(result)]
}
