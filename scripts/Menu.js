function menuShowHide(filter) {
  const menu = document.querySelector(`.menu.${filter}`)
  const otherMenus = document.querySelectorAll(`.menu:not(.${filter})`)
  const menuArrow = menu.querySelector('.menu__arrow')
  menuArrow.addEventListener('click', () => {
    const menuItems = menu.querySelector('.menu__items')
    const menuSearchBar = menu.querySelector('.filter.search-bar')
    const menuContent = menu.querySelector('.menu__content')
    if (menu.classList.contains('closed')) {
      menuArrow.classList.add('fa-rotate-180')
      menu.classList.replace('closed', 'opened')
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

export function displayChosenTags(value) {
  const chosenTagsDiv = document.querySelector('.chosen-tags')
  chosenTagsDiv.classList.replace('closed', 'opened')
  const chosenTag = document.createElement('div')
  chosenTag.classList.add('chosen-tag')
  chosenTag.innerHTML = `
    <span class='tag-text'>${value}</span>
    <button>
      <span class="fa-solid fa-xmark remove-tag"></span>
    </button>
  `
  chosenTagsDiv.appendChild(chosenTag)
}

// menuShowHide()
menuShowHide('ingredients')
menuShowHide('appliances')
menuShowHide('ustensils')
