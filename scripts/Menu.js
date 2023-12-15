import { removeChosenTagFromSelected, updatePage } from './Utils.js'
import { searchRecipesByTags } from './Search/Tags.js'
// import { updatePage } from './Utils.js'

function menuShowHide(filter) {
  const menu = document.querySelector(`.menu.${filter}`)
  const otherMenus = document.querySelectorAll(`.menu:not(.${filter})`)
  const menuArrow = menu.querySelector('.menu__arrow')
  const menuTitle = menu.querySelector('.menu__title')
  menuTitle.addEventListener('click', () => {
    const menuItems = menu.querySelector('.menu__items')
    const menuSearchBar = menu.querySelector('.filter.search-bar')
    const menuContent = menu.querySelector('.menu__content')
    if (menu.classList.contains('closed')) {
      menu.classList.replace('closed', 'opened')
      menuArrow.classList.add('fa-rotate-180')
      menuItems.classList.replace('closed', 'opened')
      menuSearchBar.classList.replace('closed', 'opened')
      menuContent.classList.replace('closed', 'opened')
      otherMenus.forEach(menu => {
        menu.classList.replace('opened', 'closed')
        const menuArrow = menu.querySelector('.menu__arrow')
        const menuItems = menu.querySelector('.menu__items')
        const menuSearchBar = menu.querySelector('.filter.search-bar')
        const menuContent = menu.querySelector('.menu__content')
        menuItems.classList.replace('opened', 'closed')
        menuSearchBar.classList.replace('opened', 'closed')
        menuContent.classList.replace('opened', 'closed')
        menuArrow.classList.remove('fa-rotate-180')
      })
    } else {
      menuArrow.classList.remove('fa-rotate-180')
      menu.classList.replace('opened', 'closed')
      menuItems.classList.replace('opened', 'closed')
      menuSearchBar.classList.replace('opened', 'closed')
      menuContent.classList.replace('opened', 'closed')
    }
  })
}

export function chosenTags(value, category) {
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
    updatePage(filteredRecipes)
    chosenTag.remove()
    // chosenTags(item, category)
  })
  chosenTagsDiv.appendChild(chosenTag)
}

// menuShowHide()
menuShowHide('ingredients')
menuShowHide('appliances')
menuShowHide('ustensils')
