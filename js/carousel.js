
let indexCarousel = 1

carousel(indexCarousel)

function carousel(n){

  const mycarousel = document.querySelectorAll('.carousel')

  let i
  for(i = 0; i < mycarousel.length; i++){
    mycarousel[i].classList.add('carousel')
  }
  mycarousel[indexCarousel-1].classList.toggle('carousel');


}