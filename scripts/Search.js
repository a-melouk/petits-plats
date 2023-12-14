const selectedIngredients = []
const selectedAppliances = []
const selectedUstensils = []
sessionStorage.setItem('selectedIngredients', JSON.stringify(selectedIngredients))
sessionStorage.setItem('selectedAppliances', JSON.stringify(selectedAppliances))
sessionStorage.setItem('selectedUstensils', JSON.stringify(selectedUstensils))

export function searchRecipesByTitle(recipes, searchValue) {
  let result = []
  recipes.map(recipe => {
    if (recipe.name.toLowerCase().includes(searchValue.toLowerCase())) result.push(recipe)
  })
  return [...new Set(result)]
}

export function searchRecipesByIngredient(recipes, searchValue) {
  let result = []
  recipes.map(recipe => {
    recipe.ingredients.map(ingredient => {
      // if (ingredient.ingredient.toLowerCase().includes(searchValue.toLowerCase())) result.push(recipe)
      if (ingredient.ingredient.toLowerCase() === searchValue.toLowerCase()) result.push(recipe)
    })
  })
  return [...new Set(result)]
}

export function searchRecipesByAppliance(recipes, searchValue) {
  let result = []
  recipes.map(recipe => {
    if (recipe.appliance.toLowerCase() === searchValue.toLowerCase()) result.push(recipe)
  })
  return [...new Set(result)]
}

export function searchRecipesByUstensil(recipes, searchValue) {
  let result = []
  recipes.map(recipe => {
    recipe.ustensils.map(ustensil => {
      if (ustensil.toLowerCase() === searchValue.toLowerCase()) result.push(recipe)
    })
  })
  return [...new Set(result)]
}

export function searchRecipesByDescription(recipes, searchvalue) {
  let result = []
  recipes.map(recipe => {
    if (recipe.description.toLowerCase().includes(searchvalue.toLowerCase())) result.push(recipe)
  })
  return [...new Set(result)]
}

export function searchRecipesByTitleIngredientsDescription(recipes, search) {
  const tempTitle = searchRecipesByTitle(recipes, search)
  const tempIngredients = searchRecipesByIngredient(recipes, search)
  const tempDescription = searchRecipesByDescription(recipes, search)

  let temp = [...tempTitle, ...tempIngredients, ...tempDescription]
  return [...new Set(temp)]
}

// export function searchRecipesByIngredients(recipes, ingredientsArray) {
//   let result = []
//   let count = 0
//   recipes.map(recipe => {
//     ingredientsArray.map(ingredient => {
//       recipe.ingredients.map(recipeIngredient => {
//         if (recipeIngredient.ingredient.toLowerCase() === ingredient.toLowerCase()) count++
//       })
//     })
//     if (count === ingredientsArray.length) result.push(recipe)
//     count = 0
//   })
//   return [...new Set(result)]
// }
