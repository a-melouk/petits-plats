function menuShowHide() {
  const menus = document.querySelectorAll('.menu')
  menus.forEach(menu => {
    const arrowMenu = menu.querySelector('.menu__arrow')
    arrowMenu.addEventListener('click', () => {
      const menuItems = menu.querySelector('.menu__items')
      const menuSearchBar = menu.querySelector('.filter.search-bar')
      const menuContent = menu.querySelector('.menu__content')
      if (menu.classList.contains('closed')) {
        arrowMenu.classList.add('fa-rotate-180')
        menu.classList.replace('closed', 'opened')
        menuItems.classList.replace('closed', 'opened')
        menuSearchBar.classList.replace('closed', 'opened')
        menuContent.classList.replace('closed', 'opened')
      } else {
        arrowMenu.classList.remove('fa-rotate-180')
        menu.classList.replace('opened', 'closed')
        menuItems.classList.replace('opened', 'closed')
        menuSearchBar.classList.replace('opened', 'closed')
        menuContent.classList.replace('opened', 'closed')
      }
    })
  })
}

menuShowHide()
