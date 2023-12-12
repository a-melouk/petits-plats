import recipes from '../data/recipes.mjs'
import { searchRecipesByIngredient } from './Search.js'
// import { searchRecipesByIngredients } from './Search.js'
import { updatePage } from './SearchBar.js'
import { displayChosenTags } from './Utils/Utils.js'

//Get all the ingredients from a given recipes array
function getAllIngredients(recipes) {
  let result = []
  recipes.map(recipe => {
    recipe.ingredients.map(ingredient => {
      result.push(ingredient.ingredient.toLowerCase())
    })
  })
  result = [...new Set(result)].sort()
  return result
}

//Generate the ingredients menu from a given recipes array
export function generateIngredients(recipes) {
  const ingredientsMenu = document.querySelector('.menu.ingredients .menu__items')
  ingredientsMenu.innerHTML = ''
  const allIngredients = getAllIngredients(recipes)

  allIngredients.map(ingredient => {
    const ingredientItem = document.createElement('li')
    ingredientItem.classList.add('menu__item')
    ingredientItem.innerHTML = `
      <button>${ingredient}</button>
    `
    ingredientItem.addEventListener('click', () => {
      const value = ingredientItem.querySelector('button').textContent
      const filteredRecipes = searchRecipesByIngredient(recipes, value)
      updatePage(filteredRecipes)
      displayChosenTags('ingredients', ingredient)
    })
    ingredientsMenu.appendChild(ingredientItem)
  })
}
/* ----------------------------------------------------------------------------------- */

//Ingredient menu search
function ingredientSearch() {
  const history = JSON.parse(sessionStorage.getItem('history'))
  const currentDisplayedRecipes = history[history.length - 1]
  const currentIngredients = getAllIngredients(currentDisplayedRecipes)
  const ingredientsSearchInput = document.getElementById('ingredient')
  ingredientsSearchInput.addEventListener('keyup', () => {
    const value = ingredientsSearchInput.value
    const filteredIngredients = currentIngredients.filter(ingredient => ingredient.includes(value))
    const ingredientsMenuItems = document.querySelectorAll('.menu.ingredients .menu__item')
    ingredientsMenuItems.forEach(item => {
      if (!filteredIngredients.includes(item.querySelector('button').textContent)) item.classList.add('hidden')
      else item.classList.remove('hidden')
    })
  })
}

generateIngredients(recipes)
ingredientSearch()
