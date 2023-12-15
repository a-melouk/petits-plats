import recipes from '../data/recipes.mjs'
import { generateMenu } from './GenerateMenu.js'

//Get all the ingredients from a given recipes array
export function getAllIngredients(recipes) {
  let result = []
  recipes.map(recipe => {
    recipe.ingredients.map(ingredient => {
      result.push(ingredient.ingredient.toLowerCase())
    })
  })
  result = [...new Set(result)].sort()
  return result
}

//Ingredient menu search
function ingredientSearch() {
  const history = JSON.parse(sessionStorage.getItem('history'))
  // const selectedIngredients = JSON.parse(sessionStorage.getItem('tags')).ingredients

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

generateMenu(recipes, 'ingredients')
ingredientSearch()
