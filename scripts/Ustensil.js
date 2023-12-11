import recipes from '../data/recipes.mjs'

//Used to get all the ustensils from a given recipes array
function getAllUstensils(recipes) {
  const result = []
  recipes.map(recipe => {
    recipe.ustensils.map(ustensil => {
      result.push(ustensil)
    })
  })
  return [...new Set(result)]
}

//Used to initialize and generate the ustensils menu
export function generateUstensils(recipes) {
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

//Listener on the search input of the ustensils menu
function ustensilMenuSearch() {
  const ustensilsSearchInput = document.getElementById('ustensil')
  ustensilsSearchInput.addEventListener('keyup', () => {
    const value = ustensilsSearchInput.value
    generateUstensilsAfterSearch(value)
  })
}

//Used to search for an ustensil in the ustensils menu (either pass recipes or filteredRecipes)
//Either regenerate the whole menu or remove filtered childs
function generateUstensilsAfterSearch(searchValue) {
  const filteredUstensils = searchUstensil(searchValue)
  const ustensilsMenu = document.querySelector('.menu.ustensils .menu__items')
  ustensilsMenu.innerHTML = ''
  filteredUstensils.map(ustensil => {
    const ustensilItem = document.createElement('li')
    ustensilItem.classList.add('menu__item')
    ustensilItem.innerHTML = `
      <button>${ustensil}</button>
    `
    ustensilsMenu.appendChild(ustensilItem)
  })
}

//Filter ustensils menu by searchValue, either pass recipes or actual ustensils
function searchUstensil(searchValue) {
  const filteredRecipes = JSON.parse(sessionStorage.getItem('filteredRecipes'))
  searchValue = searchValue.toLowerCase()
  const filteredUstensils = []
  filteredRecipes.map(recipe => {
    recipe.ustensils.map(ustensil => {
      if (ustensil.includes(searchValue)) filteredUstensils.push(ustensil)
    })
  })
  return [...new Set(filteredUstensils)]
}

generateUstensils(recipes)
ustensilMenuSearch()

//  function getRecipesByUstensil(recipes, ustensil) {
//   let result = []
//   recipes.map(recipe => {
//     recipe.ustensils.map(ustensils => {
//       if (ustensils.toLowerCase() === ustensil.toLowerCase()) {
//         result.push(recipe)
//       }
//     })
//   })
//   return result
// }
