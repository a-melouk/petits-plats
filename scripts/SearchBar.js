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
    if (containsWord(recipe.name, searchValue)) result.push(recipe)
  })
  return [...new Set(result)]
}

function searchRecipesByIngredients(recipes, searchValue) {
  let result = []
  recipes.map(recipe => {
    recipe.ingredients.map(ingredient => {
      if (containsWord(ingredient.ingredient, searchValue)) result.push(recipe)
    })
  })
  return [...new Set(result)]
}

function searchRecipesByDescription(recipes, searchvalue) {
  let result = []
  recipes.map(recipe => {
    if (containsWord(recipe.description, searchvalue)) result.push(recipe)
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
  const searchButton = document.querySelector('.search-button')
  searchButton.addEventListener('click', () => {
    const searchInput = document.getElementById('search-value')
    const value = searchInput.value
    if (searchInput.value.length >= 3) {
      filteredRecipes = searchRecipesByTitleIngredientsDescription(recipes, value)
      generateRecipeCard(filteredRecipes)
      generateIngredients(filteredRecipes)
      generateAppliances(filteredRecipes)
      generateUstensils(filteredRecipes)
      updateTotalRecipes(filteredRecipes)
      sessionStorage.setItem('filteredRecipes', JSON.stringify(filteredRecipes))
    }
  })
  return filteredRecipes
}
searchBox()
