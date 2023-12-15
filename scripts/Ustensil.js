import recipes from '../data/recipes.mjs'
import { generateMenu } from './GenerateMenu.js'

//Get all the ustensils from a given recipes array
export function getAllUstensils(recipes) {
  let result = []
  recipes.map(recipe => {
    recipe.ustensils.map(ustensil => {
      result.push(ustensil.toLowerCase())
    })
  })
  result = [...new Set(result)].sort()
  return result
}

//Ustensil menu search
function ustensilSearch() {
  const history = JSON.parse(sessionStorage.getItem('history'))
  const currentDisplayedRecipes = history[history.length - 1]
  const currentUstensils = getAllUstensils(currentDisplayedRecipes)
  const ustensilsSearchInput = document.getElementById('ustensil')
  const resetInput = ustensilsSearchInput.nextElementSibling
  resetInput.addEventListener('click', () => {
    ustensilsSearchInput.value = ''
    const ustensilsMenuItems = document.querySelectorAll('.menu.ustensils .menu__item')
    ustensilsMenuItems.forEach(item => {
      item.classList.remove('hidden')
    })
  })
  ustensilsSearchInput.addEventListener('keyup', () => {
    const value = ustensilsSearchInput.value.toLowerCase()
    const filteredUstensils = currentUstensils.filter(ustensil => ustensil.includes(value))
    const ustensilsMenuItems = document.querySelectorAll('.menu.ustensils .menu__item')
    ustensilsMenuItems.forEach(item => {
      if (!filteredUstensils.includes(item.querySelector('button').textContent)) item.classList.add('hidden')
      else item.classList.remove('hidden')
    })
  })
}
generateMenu(recipes, 'ustensils')
ustensilSearch()
