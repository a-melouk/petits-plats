import recipes from '../data/recipes.mjs'
import { getAllIngredients, getAllAppliances, getAllUstensils } from './methods.js'

function generateRecipeCard() {
  const recipesContainer = document.querySelector('.recipes-container')
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
            .map(
              ingredient => `
            <li class='ingredient'>
              <p class='ingredient-name'>${ingredient.ingredient}</p>
              ${
                ingredient.quantity
                  ? `<p class='ingredient-quantity'>${ingredient.quantity} 
                  ${ingredient.unit ? ` ${ingredient.unit}` : ''}
                </p>`
                  : ''
              }
            </li>
          `
            )
            .join('')}
        </ul>
      </section>
    `
    recipesContainer.appendChild(recipeCard)
  })
}

function generateIngredients() {
  const allIngredients = getAllIngredients(recipes)
  const ingredientsMenu = document.querySelector('.menu.ingredients .menu__items')
  allIngredients.map(ingredient => {
    const ingredientItem = document.createElement('li')
    ingredientItem.classList.add('menu__item')
    ingredientItem.innerHTML = `
      <button>${ingredient}</button>
    `
    ingredientsMenu.appendChild(ingredientItem)
  })
}

function generateAppliances() {
  const allAppliances = getAllAppliances(recipes)
  const appliancesMenu = document.querySelector('.menu.appareils .menu__items')
  allAppliances.map(appliance => {
    const applianceItem = document.createElement('li')
    applianceItem.classList.add('menu__item')
    applianceItem.innerHTML = `
      <button>${appliance}</button>
    `
    appliancesMenu.appendChild(applianceItem)
  })
}

function generateUstensils() {
  const allUstensils = getAllUstensils(recipes)
  const ustensilsMenu = document.querySelector('.menu.ustensils .menu__items')
  allUstensils.map(ustensil => {
    const ustensilItem = document.createElement('li')
    ustensilItem.classList.add('menu__item')
    ustensilItem.innerHTML = `
      <button>${ustensil}</button>
    `
    ustensilsMenu.appendChild(ustensilItem)
  })
}

generateIngredients()
generateAppliances()
generateUstensils()
generateRecipeCard()
