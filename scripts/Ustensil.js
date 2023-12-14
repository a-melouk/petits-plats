import recipes from '../data/recipes.mjs'
import { searchRecipesByUstensil } from './Search.js'
// import { searchRecipesByUstensils } from './Search.js'
import { updatePage } from './SearchBar.js'
import { displayChosenTags } from './Utils/Utils.js'

//Get all the ustensils from a given recipes array
function getAllUstensils(recipes) {
  let result = []
  recipes.map(recipe => {
    recipe.ustensils.map(ustensil => {
      result.push(ustensil.toLowerCase())
    })
  })
  result = [...new Set(result)].sort()
  return result
}

//Generate the ustensils menu from a given recipes array
export function generateUstensils(recipes) {
  const ustensilsMenu = document.querySelector('.menu.ustensils .menu__items')
  ustensilsMenu.innerHTML = ''
  const allUstensils = getAllUstensils(recipes)

  allUstensils.map(ustensil => {
    const ustensilItem = document.createElement('li')
    ustensilItem.classList.add('menu__item')
    ustensilItem.innerHTML = `
      <button>${ustensil}</button>
    `
    ustensilItem.addEventListener('click', () => {
      const value = ustensilItem.querySelector('button').textContent
      const filteredRecipes = searchRecipesByUstensil(recipes, value)
      updatePage(filteredRecipes)
      displayChosenTags('ustensils', ustensil)
    })
    ustensilsMenu.appendChild(ustensilItem)
  })
}
/* ----------------------------------------------------------------------------------- */

//Ustensil menu search
function ustensilSearch() {
  const history = JSON.parse(sessionStorage.getItem('history'))
  const currentDisplayedRecipes = history[history.length - 1]
  const currentUstensils = getAllUstensils(currentDisplayedRecipes)
  const ustensilsSearchInput = document.getElementById('ustensil')
  ustensilsSearchInput.addEventListener('keyup', () => {
    const value = ustensilsSearchInput.value
    const filteredUstensils = currentUstensils.filter(ustensil => ustensil.includes(value))
    const ustensilsMenuItems = document.querySelectorAll('.menu.ustensils .menu__item')
    ustensilsMenuItems.forEach(item => {
      if (!filteredUstensils.includes(item.querySelector('button').textContent)) item.classList.add('hidden')
      else item.classList.remove('hidden')
    })
  })
}

generateUstensils(recipes)
ustensilSearch()
