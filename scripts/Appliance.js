import recipes from '../data/recipes.mjs'
import { searchRecipesByAppliance } from './Search.js'
import { updatePage } from './SearchBar.js'
import { displayChosenTags } from './Utils/Utils.js'

//Get all the appliances from a given recipes array
function getAllAppliances(recipes) {
  let result = []
  recipes.map(recipe => {
    result.push(recipe.appliance.toLowerCase())
  })
  result = [...new Set(result)].sort()
  return result
}

//Generate the appliances menu from a given recipes array
export function generateAppliances(recipes) {
  const appliancesMenu = document.querySelector('.menu.appliances .menu__items')
  appliancesMenu.innerHTML = ''
  const allAppliances = getAllAppliances(recipes)

  allAppliances.map(appliance => {
    const applianceItem = document.createElement('li')
    applianceItem.classList.add('menu__item')
    applianceItem.innerHTML = `
      <button>${appliance}</button>
    `
    applianceItem.addEventListener('click', () => {
      const value = applianceItem.querySelector('button').textContent
      const filteredRecipes = searchRecipesByAppliance(recipes, value)
      updatePage(filteredRecipes)
      displayChosenTags('appliances', appliance)
    })
    appliancesMenu.appendChild(applianceItem)
  })
}
/* ----------------------------------------------------------------------------------- */

//Appliance menu search
function applianceSearch() {
  const history = JSON.parse(sessionStorage.getItem('history'))
  const currentDisplayedRecipes = history[history.length - 1]
  const currentAppliances = getAllAppliances(currentDisplayedRecipes)
  const appliancesSearchInput = document.getElementById('appliance')
  appliancesSearchInput.addEventListener('keyup', () => {
    const value = appliancesSearchInput.value
    const filteredAppliances = currentAppliances.filter(appliance => appliance.includes(value))
    const appliancesMenuItems = document.querySelectorAll('.menu.appliances .menu__item')
    appliancesMenuItems.forEach(item => {
      if (!filteredAppliances.includes(item.querySelector('button').textContent)) item.classList.add('hidden')
      else item.classList.remove('hidden')
    })
  })
}

generateAppliances(recipes)
applianceSearch()
