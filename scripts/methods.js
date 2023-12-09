//3 functions to generate lists of ingredients, appliances and ustensils
export function getAllIngredients(recipes) {
  let result = []
  recipes.map(recipe => {
    recipe.ingredients.map(ingredient => {
      ingredient.ingredient = ingredient.ingredient.toLowerCase()
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

//3 functions to filter recipes by ingredients, appliances and ustensils
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

export function getRecipesByAppliance(recipes, appliance) {
  const result = []
  recipes.map(recipe => {
    if (recipe.appliance.toLowerCase() === appliance.toLowerCase()) {
      result.push(recipe)
    }
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
  return result
}

//3 functions to search recipes by title, ingredient and description
export function searchRecipesByTitle(recipes, searchValue) {
  const result = []
  recipes.map(recipe => {
    if (containsWord(recipe.name, searchValue)) result.push(recipe)
  })
  return result
}

export function searchRecipesByIngredients(recipes, searchValue) {
  const result = []
  recipes.map(recipe => {
    recipe.ingredients.map(ingredient => {
      if (containsWord(ingredient.ingredient, searchValue)) result.push(recipe)
    })
  })
  return result
}

export function searchRecipesByDescription(recipes, searchvalue) {
  const result = []
  recipes.map(recipe => {
    if (containsWord(recipe.description, searchvalue)) result.push(recipe)
  })
  return result
}

export function searchRecipesByTitleIngredientsDescription(recipes, search) {
  const tempTitle = searchRecipesByTitle(recipes, search)
  const tempIngredients = searchRecipesByIngredients(recipes, search)
  const tempDescription = searchRecipesByDescription(recipes, search)

  let temp = [...tempTitle, ...tempIngredients, ...tempDescription]
  const result = [...new Set(temp)]

  return result
}

export function containsWord(originalString, wordToTest) {
  wordToTest = wordToTest.toLowerCase()
  originalString = originalString.toLowerCase()
  const regex = new RegExp(`\\b${wordToTest}\\b`, 'g')
  return regex.test(originalString)
}
