export default class MenuBurger {
   constructor(menuButton) {
      this.button = document.querySelector(menuButton)
   }

   init() {
      document.addEventListener('click', e => {
         if (e.target === this.button) {
            document.documentElement.classList.toggle('menu-open')
            document.body.classList.toggle('lock')
         }
      })
   }
}
