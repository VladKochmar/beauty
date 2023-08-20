'use strict'

import MenuBurger from './modules/burgerMenu.js'
import Search from './modules/search.js'
import Gallery from './modules/gallery.js'

import './modules/sliders.js'

window.addEventListener('load', () => {
   new MenuBurger('.icon-menu').init()
   new Search('.bottom-header__label', '.bottom-header__search-close').init()

   const galleryContainers = document.querySelectorAll('[gallery-container]')

   galleryContainers.forEach(container => {
      new Gallery(container).init()
   })
})
