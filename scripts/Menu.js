import { removeChosenTagFromSelected, updatePage } from './Utils.js'
import { searchRecipesByTags } from './Search/Tags.js'
// import { updatePage } from './Utils.js'

export function menuShowHide(filter) {
  const menu = document.querySelector(`.menu.${filter}`)
  const otherMenus = document.querySelectorAll(`.menu:not(.${filter})`)
  const menuArrow = menu.querySelector('.menu__arrow')
  const menuTitle = menu.querySelector('.menu__title')
  menuTitle.addEventListener('click', () => {
    const menuItems = menu.querySelector('.menu__items')
    const menuSearchBar = menu.querySelector('.filter.search-bar')
    const menuContent = menu.querySelector('.menu__content')
    if (menu.classList.contains('closed')) {
      menuArrow.classList.add('fa-rotate-180')
      changeClosedToOpened([menu, menuItems, menuSearchBar, menuContent])
      otherMenus.forEach(otherMenu => {
        const otherMenuArrow = otherMenu.querySelector('.menu__arrow')
        const otherMenuItems = otherMenu.querySelector('.menu__items')
        const otherMenuSearchBar = otherMenu.querySelector('.filter.search-bar')
        const otherMenuContent = otherMenu.querySelector('.menu__content')
        changeOpenedToClosed([otherMenu, otherMenuItems, otherMenuSearchBar, otherMenuContent])
        otherMenuArrow.classList.remove('fa-rotate-180')
      })
    } else {
      menuArrow.classList.remove('fa-rotate-180')
      changeOpenedToClosed([menu, menuItems, menuSearchBar, menuContent])
    }
  })
}

function changeClosedToOpened(elementsArray) {
  elementsArray.forEach(element => {
    element.classList.replace('closed', 'opened')
  })
}

function changeOpenedToClosed(elementsArray) {
  elementsArray.forEach(element => {
    element.classList.replace('opened', 'closed')
  })
}

export function displayChosenTags(value, category) {
  const chosenTagsDiv = document.querySelector('.chosen-tags')
  chosenTagsDiv.classList.replace('closed', 'opened')
  const chosenTag = document.createElement('div')
  chosenTag.classList.add('chosen-tag')
  chosenTag.innerHTML = `
    <span class='tag-text'>${value}</span>
    <button>
      <span class="fa-solid fa-xmark remove-tag"></span>
    </button>
    <span class="hidden">${category}</span>
  `

  const removeTagButton = chosenTag.querySelector('button')
  removeTagButton.addEventListener('click', () => {
    let originalRecipes
    const searchBarInput = document.getElementById('search-value')
    if (searchBarInput.value.length >= 3) {
      originalRecipes = JSON.parse(sessionStorage.getItem('searchBar'))[0]
    } else originalRecipes = JSON.parse(sessionStorage.getItem('recipes'))[0]
    const chosenTagCategory = chosenTag.querySelector('.hidden').textContent
    removeChosenTagFromSelected(chosenTagCategory, value)
    const tags = JSON.parse(sessionStorage.getItem('tags'))
    console.log(originalRecipes, tags)
    const filteredRecipes = searchRecipesByTags(originalRecipes, tags)
    updatePage(filteredRecipes, 'history')
    chosenTag.remove()
  })
  chosenTagsDiv.appendChild(chosenTag)
}
