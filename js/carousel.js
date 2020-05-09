let indexCarousel = 1

carousel(indexCarousel)
carouselAuto()

function plusCarousel(n) {
  carousel(indexCarousel += n)
}


function carouselAuto() {

  const mycarousel = document.querySelectorAll('.carousel')
  const indicator = document.querySelectorAll('.dot')

  let i

  for (i = 0; i < mycarousel.length; i++) {
    mycarousel[i].style.display = 'none'
  }
  for (i = 0; i < indicator.length; i++) {
    indicator[i].classList.remove('active-dot')
  }

  if (indexCarousel > mycarousel.length) {
    indexCarousel = 1
  }

  mycarousel[indexCarousel - 1].style.display = 'block'
  indicator[indexCarousel - 1].classList.toggle('active-dot')

  indexCarousel++
  setTimeout(carouselAuto, 3000)
}


function indicatorThumbinail(n) {
  carousel(indexCarousel = n)
}

function carousel(n) {

  const mycarousel = document.querySelectorAll('.carousel')
  const indicator = document.querySelectorAll('.dot')

  if (n > mycarousel.length) {
    indexCarousel = 1
  }
  if (n < 1) {
    indexCarousel = mycarousel.length
  }

  let i
  for (i = 0; i < mycarousel.length; i++) {
    //mycarousel[i].classList.add('carousel')
    mycarousel[i].style.display = 'none'
  }
  for (i = 0; i < indicator.length; i++) {
    indicator[i].classList.remove('active-dot')
  }

  //mycarousel[indexCarousel-1].classList.remove('carousel');
  mycarousel[indexCarousel - 1].style.display = 'block'
  indicator[indexCarousel - 1].classList.toggle('active-dot')

}

