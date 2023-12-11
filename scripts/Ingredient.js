import recipes from '../data/recipes.mjs'

//Used to get all the ingredients from a given recipes array
function getAllIngredients(recipes) {
  let result = []
  recipes.map(recipe => {
    recipe.ingredients.map(ingredient => {
      ingredient.ingredient = ingredient.ingredient.toLowerCase()
      result.push(ingredient.ingredient)
    })
  })
  return [...new Set(result)]
}

//Used to initialize and generate the ingredients menu
export function generateIngredients(recipes) {
  const allIngredients = getAllIngredients(recipes)
  const ingredientsMenu = document.querySelector('.menu.ingredients .menu__items')
  ingredientsMenu.innerHTML = ''
  allIngredients.map(ingredient => {
    const ingredientItem = document.createElement('li')
    ingredientItem.classList.add('menu__item')
    ingredientItem.innerHTML = `
      <button>${ingredient}</button>
    `
    ingredientsMenu.appendChild(ingredientItem)
  })
}
/* ----------------------------------------------------------------------------------- */

//Listener on the search input of the ingredients menu
function ingredientMenuSearch() {
  const ingredientsSearchInput = document.getElementById('ingredient')
  ingredientsSearchInput.addEventListener('keyup', () => {
    const value = ingredientsSearchInput.value
    generateIngredientsAfterSearch(value)
  })
}

//Used to search for an ingredient in the ingredients menu (either pass recipes or filteredRecipes)
function generateIngredientsAfterSearch(searchValue) {
  const filteredIngredients = searchIngredient(searchValue)
  const ingredientsMenu = document.querySelector('.menu.ingredients .menu__items')
  ingredientsMenu.innerHTML = ''
  filteredIngredients.map(ingredient => {
    const ingredientItem = document.createElement('li')
    ingredientItem.classList.add('menu__item')
    ingredientItem.innerHTML = `
      <button>${ingredient}</button>
    `
    ingredientsMenu.appendChild(ingredientItem)
  })
}

//Filter ingredients menu by searchValue, either pass recipes or actual ingredients
function searchIngredient(searchValue) {
  const filteredRecipes = JSON.parse(sessionStorage.getItem('filteredRecipes'))
  searchValue = searchValue.toLowerCase()
  const filteredIngredients = []
  filteredRecipes.map(recipe => {
    recipe.ingredients.map(ingredient => {
      if (ingredient.ingredient.includes(searchValue)) filteredIngredients.push(ingredient.ingredient)
    })
  })
  return [...new Set(filteredIngredients)]
}

generateIngredients(recipes)
ingredientMenuSearch()
