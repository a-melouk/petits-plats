import { containsWord } from './Utils/Utils.js'
import { generateRecipeCard } from './RecipeCard.js'
import { generateIngredients } from './Ingredient.js'
import { generateAppliances } from './Appliance.js'
import { generateUstensils } from './Ustensil.js'
import { updateTotalRecipes } from './TotalRecipes.js'
import recipes from '../data/recipes.mjs'

function searchRecipesByTitle(recipes, searchValue) {
  let result = []
  recipes.map(recipe => {
    if (recipe.name.toLowerCase().includes(searchValue.toLowerCase())) result.push(recipe)
  })
  return [...new Set(result)]
}

function searchRecipesByIngredients(recipes, searchValue) {
  let result = []
  recipes.map(recipe => {
    recipe.ingredients.map(ingredient => {
      if (ingredient.ingredient.toLowerCase().includes(searchValue.toLowerCase())) result.push(recipe)
    })
  })
  return [...new Set(result)]
}

function searchRecipesByDescription(recipes, searchvalue) {
  let result = []
  recipes.map(recipe => {
    if (recipe.description.toLowerCase().includes(searchvalue.toLowerCase())) result.push(recipe)
  })
  return [...new Set(result)]
}

function searchRecipesByTitleIngredientsDescription(recipes, search) {
  const tempTitle = searchRecipesByTitle(recipes, search)
  const tempIngredients = searchRecipesByIngredients(recipes, search)
  const tempDescription = searchRecipesByDescription(recipes, search)

  let temp = [...tempTitle, ...tempIngredients, ...tempDescription]
  return [...new Set(temp)]
}

function searchBox() {
  let filteredRecipes = []
  const searchInput = document.getElementById('search-value')
  searchInput.addEventListener('keyup', () => {
    if (searchInput.value.length >= 3) {
      const value = searchInput.value
      filteredRecipes = searchRecipesByTitleIngredientsDescription(recipes, value)
      updatePage(filteredRecipes, value)
    }
  })

  return filteredRecipes
}
function resetInputs() {
  const inputs = document.querySelectorAll('.filter.search-bar input')
  inputs.forEach(input => {
    input.value = ''
  })
}

function updatePage(filteredRecipes) {
  generateRecipeCard(filteredRecipes)
  generateIngredients(filteredRecipes)
  generateAppliances(filteredRecipes)
  generateUstensils(filteredRecipes)
  updateTotalRecipes(filteredRecipes)
  resetInputs()
  sessionStorage.setItem('filteredRecipes', JSON.stringify(filteredRecipes))
}

searchBox()
