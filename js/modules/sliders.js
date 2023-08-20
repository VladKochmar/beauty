function initSliders() {
   const cardsSliders = document.querySelectorAll('.swiper-cards__slider')
   if (cardsSliders.length) {
      cardsSliders.forEach(() => {
         new Swiper('.swiper-cards__slider', {
            speed: 800,
            breakpoints: {
               320: {
                  spaceBetween: 10,
                  slidesPerView: 1,
               },
               500: {
                  spaceBetween: 10,
                  slidesPerView: 2,
               },
               768: {
                  spaceBetween: 10,
                  slidesPerView: 3,
               },
               992: {
                  spaceBetween: 8,
                  slidesPerView: 4,
               },
            },
         })
      })
   }
   if (document.querySelector('.our-quotes__slider')) {
      const slidesNumber = document.querySelectorAll('.our-quotes__slide').length
      const initialSlide = Math.floor(slidesNumber / 2)
      new Swiper('.our-quotes__slider', {
         speed: 800,
         initialSlide: initialSlide,
      })
   }
   if (document.querySelector('.new-arrivals__slider')) {
      new Swiper('.new-arrivals__slider', {
         speed: 800,
         breakpoints: {
            320: {
               spaceBetween: 10,
               slidesPerView: 1,
            },
            520: {
               spaceBetween: 10,
               slidesPerView: 2,
            },
         },
      })
   }
}

initSliders()
