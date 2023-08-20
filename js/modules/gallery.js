export default class Gallery {
   constructor(container, cssStylesObject) {
      this.galleryContainer = container
      this.imagesList = this.galleryContainer.querySelectorAll('[big-image]')
      this.openItemsList = this.galleryContainer.querySelectorAll('[button-open]')
      this.cssStylesObject = {
         openBlock: 'open-gallery',
         prevButton: 'prev-image-button',
         nextButton: 'next-image-button',
         targetImage: 'gallery-image',
         ...(cssStylesObject ?? {}),
      }
   }

   galleryEvents(e) {
      this.targetElement = e.target

      if (this.targetElement === document.querySelector(`.${this.cssStylesObject.openBlock}`)) {
         this.clear()
      }

      if (this.targetElement.closest(`.${this.cssStylesObject.nextButton}`)) {
         this.next()
      }

      if (this.targetElement.closest(`.${this.cssStylesObject.prevButton}`)) {
         this.prev()
      }
   }

   render() {
      this.galleryOpenBlock = document.createElement('div')
      this.galleryOpenBlock.className = this.cssStylesObject.openBlock
      document.body.append(this.galleryOpenBlock)
      this.galleryOpenBlock.addEventListener('click', this.galleryEvents.bind(this))

      const prevImageButton = document.createElement('button')
      prevImageButton.className = this.cssStylesObject.prevButton
      prevImageButton.append(document.createElement('span'))
      this.galleryOpenBlock.append(prevImageButton)

      const nextImageButton = document.createElement('button')
      nextImageButton.className = this.cssStylesObject.nextButton
      nextImageButton.append(document.createElement('span'))
      this.galleryOpenBlock.append(nextImageButton)

      this.currentImage = document.createElement('img')
      this.currentImage.className = this.cssStylesObject.targetImage
      this.galleryOpenBlock.append(this.currentImage)

      this.renderImage()
   }

   renderImage() {
      this.currentImage.src = this.imagesList[this.currentIndex].getAttribute('big-image')
   }

   getCurrentImageIndex() {
      for (let i = 0; i < this.openItemsList.length; i++) {
         if (this.openItemsList[i] === this.targetElement) return i
      }
   }

   clear() {
      document.body.classList.remove('lock')
      this.galleryOpenBlock.remove()
   }

   open() {
      document.body.classList.add('lock')
      this.currentIndex = this.getCurrentImageIndex()
      this.render()
   }

   prev() {
      this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.imagesList.length - 1
      this.renderImage()
   }

   next() {
      this.currentIndex = this.currentIndex < this.imagesList.length - 1 ? this.currentIndex + 1 : 0
      this.renderImage()
   }

   init() {
      this.galleryContainer.addEventListener('click', e => {
         this.targetElement = e.target

         if (this.targetElement.hasAttribute('button-open')) {
            this.open()
         }
      })
   }
}
