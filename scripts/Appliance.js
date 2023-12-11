import recipes from '../data/recipes.mjs'

//Used to get all the appliances from a given recipes array
function getAllAppliances(recipes) {
  const result = []
  recipes.map(recipe => {
    result.push(recipe.appliance)
  })
  return [...new Set(result)]
}

//Used to initialize and generate the appliances menu
export function generateAppliances(recipes) {
  const allAppliances = getAllAppliances(recipes)
  const appliancesMenu = document.querySelector('.menu.appliances .menu__items')
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

//Listener on the search input of the appliances menu
function applianceMenuSearch() {
  const appliancesSearchInput = document.getElementById('appliance')
  appliancesSearchInput.addEventListener('keyup', () => {
    const value = appliancesSearchInput.value
    generateAppliancesAfterSearch(value)
  })
}

//Used to search for an appliance in the appliances menu (either pass recipes or filteredRecipes)
//Either regenerate the whole menu or remove filtered childs
function generateAppliancesAfterSearch(searchValue) {
  const filteredAppliances = searchAppliance(searchValue)
  const appliancesMenu = document.querySelector('.menu.appliances .menu__items')
  appliancesMenu.innerHTML = ''
  filteredAppliances.map(appliance => {
    const applianceItem = document.createElement('li')
    applianceItem.classList.add('menu__item')
    applianceItem.innerHTML = `
      <button>${appliance}</button>
    `
    appliancesMenu.appendChild(applianceItem)
  })
}

//Filter appliances menu by searchValue, either pass recipes or actual appliances
function searchAppliance(searchValue) {
  const filteredRecipes = JSON.parse(sessionStorage.getItem('filteredRecipes'))
  searchValue = searchValue.toLowerCase()
  const filteredAppliances = []
  filteredRecipes.map(recipe => {
    if (recipe.appliance.toLowerCase().includes(searchValue)) filteredAppliances.push(recipe.appliance)
  })
  return [...new Set(filteredAppliances)]
}

generateAppliances(recipes)
applianceMenuSearch()

//  function getRecipesByAppliance(recipes, appliance) {
//   const result = []
//   recipes.map(recipe => {
//     if (recipe.appliance.toLowerCase() === appliance.toLowerCase()) {
//       result.push(recipe)
//     }
//   })
//   return result
// }
