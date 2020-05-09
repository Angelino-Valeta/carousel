
let indexCarousel = 1

carousel(indexCarousel)

function plusCarousel(n){
  carousel(indexCarousel += n)
}

function indicatorThumbinail(n){
  carousel(indexCarousel = n)
}

function carousel(n){

  const mycarousel = document.querySelectorAll('.carousel')
  const indicator = document.querySelectorAll('.dot')

  let i
  for(i = 0; i < mycarousel.length; i++){
    mycarousel[i].classList.add('carousel')
  }
  for(i = 0; i < indicator.length; i++){
    indicator[i].classList.remove('active-dot')
  }
  
  //mycarousel[indexCarousel-1].classList.remove('carousel');
  mycarousel[indexCarousel-1].style.display = 'block'
  indicator[indexCarousel-1].classList.toggle('active-dot')

}