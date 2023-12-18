//Get all the appliances from a given recipes array
export function getAllAppliances(recipes) {
  let result = []
  recipes.map(recipe => {
    result.push(recipe.appliance.toLowerCase())
  })
  result = [...new Set(result)].sort()
  return result
}

//Appliance menu search
export function applianceSearch() {
  const history = JSON.parse(sessionStorage.getItem('history'))
  // const currentDisplayedRecipes = history[history.length - 1]
  const currentDisplayedRecipes = history[0]
  const currentAppliances = getAllAppliances(currentDisplayedRecipes)
  const appliancesSearchInput = document.getElementById('appliance')
  const resetInput = appliancesSearchInput.nextElementSibling
  resetInput.addEventListener('click', () => {
    appliancesSearchInput.value = ''
    const appliancesMenuItems = document.querySelectorAll('.menu.appliances .menu__item')
    appliancesMenuItems.forEach(item => {
      item.classList.remove('hidden')
    })
  })
  appliancesSearchInput.addEventListener('keyup', () => {
    const value = appliancesSearchInput.value.toLowerCase()
    const filteredAppliances = currentAppliances.filter(appliance => appliance.includes(value))
    const appliancesMenuItems = document.querySelectorAll('.menu.appliances .menu__item')
    appliancesMenuItems.forEach(item => {
      if (!filteredAppliances.includes(item.querySelector('button').textContent)) item.classList.add('hidden')
      else item.classList.remove('hidden')
    })
  })
}
