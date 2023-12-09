import recipes from '../data/recipes.mjs'
import { getAllIngredients, getAllAppliances, getAllUstensils, searchRecipesByTitleIngredientsDescription } from './methods.js'

function generateRecipeCard(recipes) {
  const recipesContainer = document.querySelector('.recipes-container')
  recipesContainer.innerHTML = ''
  recipes.map(recipe => {
    const recipeCard = document.createElement('article')
    recipeCard.classList.add('recipe-card')
    recipeCard.innerHTML = `
      <p class='recipe-time'>${recipe.time} min</p>
      <img class="recipe-image" src="./assets/petits-plats-photos/${recipe.image}" alt="${recipe.image}">
      <h4 class='plate-name'>${recipe.name}</h4>
      <section class='recipe-container'>
        <h5>Recette</h5>
        <p class='recipe-description'>${recipe.description}</p>
      </section>
      <section class='ingredients-container'>
        <h5>Ingrédients</h5>
        <ul class='ingredients'>
        ${recipe.ingredients
          .map(ingredient => {
            //Check if ingredient quantity has a unit
            let unit = ingredient.unit ? `${ingredient.unit}` : ''
            //Check if ingredient has a quantity
            let quantity = ingredient.quantity ? `<p class='ingredient-quantity'>${ingredient.quantity} ${unit}</p>` : ''
            return `<li class='ingredient'><p class='ingredient-name'>${ingredient.ingredient} ${quantity}</p> </li>`
          })
          .join('')}
        </ul>
      </section>`
    recipesContainer.appendChild(recipeCard)
  })
}

function updateTotalRecipes(recipes) {
  const totalRecipes = document.querySelector('.total')
  if (recipes.length > 1) totalRecipes.innerHTML = `${recipes.length} recettes`
  else if (recipes.length === 1) totalRecipes.innerHTML = `${recipes.length} recette`
  else if (recipes.length === 0) totalRecipes.innerHTML = `Aucune recette trouvée`
}

function generateIngredients(recipes) {
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

function generateAppliances(recipes) {
  const allAppliances = getAllAppliances(recipes)
  const appliancesMenu = document.querySelector('.menu.appareils .menu__items')
  appliancesMenu.innerHTML = ''
  allAppliances.map(appliance => {
    const applianceItem = document.createElement('li')
    applianceItem.classList.add('menu__item')
    applianceItem.innerHTML = `
      <button>${appliance}</button>
    `
    appliancesMenu.appendChild(applianceItem)
  })
}

function generateUstensils(recipes) {
  const allUstensils = getAllUstensils(recipes)
  const ustensilsMenu = document.querySelector('.menu.ustensils .menu__items')
  ustensilsMenu.innerHTML = ''
  allUstensils.map(ustensil => {
    const ustensilItem = document.createElement('li')
    ustensilItem.classList.add('menu__item')
    ustensilItem.innerHTML = `
      <button>${ustensil}</button>
    `
    ustensilsMenu.appendChild(ustensilItem)
  })
}

generateIngredients(recipes)
generateAppliances(recipes)
generateUstensils(recipes)
generateRecipeCard(recipes)
updateTotalRecipes(recipes)

function searchBox() {
  const searchButton = document.querySelector('.search-button')
  searchButton.addEventListener('click', () => {
    const searchInput = document.getElementById('search-value')
    const value = searchInput.value
    if (searchInput.value.length >= 3) {
      const filteredRecipes = searchRecipesByTitleIngredientsDescription(recipes, value)
      generateRecipeCard(filteredRecipes)
      generateIngredients(filteredRecipes)
      generateAppliances(filteredRecipes)
      generateUstensils(filteredRecipes)
      updateTotalRecipes(filteredRecipes)
    }
  })
}

searchBox()
