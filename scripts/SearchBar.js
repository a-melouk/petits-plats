import recipes from '../data/recipes.mjs'
import { generateRecipeCard } from './RecipeCard.js'
import { generateIngredients } from './Ingredient.js'
import { generateAppliances } from './Appliance.js'
import { generateUstensils } from './Ustensil.js'
import { updateTotalRecipes } from './TotalRecipes.js'
import { searchRecipesByTitleIngredientsDescription } from './Search.js'

function searchBox() {
  let filteredRecipes = []
  const searchInput = document.getElementById('search-value')
  searchInput.addEventListener('keyup', () => {
    if (searchInput.value.length >= 3) {
      const value = searchInput.value
      filteredRecipes = searchRecipesByTitleIngredientsDescription(recipes, value)
      updatePage(filteredRecipes, value)
      saveHistory(filteredRecipes)
      // menuIngredients()
    } else if (searchInput.value.length < 3) {
      filteredRecipes = recipes
      updatePage(filteredRecipes)
      saveHistory(filteredRecipes)
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

export function updatePage(filteredRecipes) {
  generateRecipeCard(filteredRecipes)
  generateIngredients(filteredRecipes)
  generateAppliances(filteredRecipes)
  generateUstensils(filteredRecipes)
  updateTotalRecipes(filteredRecipes)
  resetInputs()
  saveHistory(filteredRecipes)
}

function saveHistory(recipes) {
  const history = JSON.parse(sessionStorage.getItem('history'))
  history.push(recipes)
  sessionStorage.setItem('history', JSON.stringify(history))
}

searchBox()
/* export function menuIngredients() {
  // const currentRecipes = JSON.parse(sessionStorage.getItem('filteredRecipes'))
  const history = JSON.parse(sessionStorage.getItem('history'))
  const currentRecipes = history[history.length - 1]
  console.log(currentRecipes)
  const ingredientsMenu = document.querySelector('.menu.ingredients')
  const ingredientsMenuItems = ingredientsMenu.querySelectorAll('.menu.ingredients .menu__item')
  const chosenTagsDiv = document.querySelector('.chosen-tags')
  ingredientsMenuItems.forEach(item => {
    item.addEventListener('click', () => {
      const value = item.querySelector('button').textContent
      const filteredRecipes = searchRecipesByIngredients(currentRecipes, value)
      updatePage(filteredRecipes)
      chosenTagsDiv.classList.replace('closed', 'opened')
      const chosenTag = document.createElement('div')
      chosenTag.classList.add('chosen-tag')
      chosenTag.innerHTML = `
        <span class='tag-text'>${value}</span>
        <button>
          <span class="fa-solid fa-xmark remove-tag"></span>
        </button>
      `
      chosenTagsDiv.appendChild(chosenTag)
    })
  })
} */

/* function menuItemListener(element, category) {
  const chosenTagsDiv = document.querySelector('.chosen-tags')
  const history = JSON.parse(sessionStorage.getItem('history'))
  const currentRecipes = history[history.length - 1]
  const value = element.querySelector('button').textContent
  const filteredRecipes = searchRecipesByIngredient(currentRecipes, value)
  updatePage(filteredRecipes)
  chosenTagsDiv.classList.replace('closed', 'opened')
  const chosenTag = document.createElement('div')
  chosenTag.classList.add('chosen-tag')
  chosenTag.innerHTML = `
    <span class='tag-text'>${value}</span>
    <button>
      <span class="fa-solid fa-xmark remove-tag"></span>
    </button>
  `
  chosenTagsDiv.appendChild(chosenTag)
} */
