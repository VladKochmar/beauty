export default class Search {
   constructor(searchButton = '.search-button', closeButton = '.close-search') {
      this.searchButton = document.querySelector(searchButton)
      this.closeButton = document.querySelector(closeButton)
      this.searchContainer = document.querySelector('.bottom-header__search')
   }

   init() {
      this.searchContainer.addEventListener('click', e => {
         const targetElement = e.target

         if (targetElement === this.searchButton) this.searchContainer.classList.add('_active')
         if (targetElement === this.closeButton) this.searchContainer.classList.remove('_active')
      })
   }
}
