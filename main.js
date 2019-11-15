const slideItems = document.getElementsByClassName('slide-item')
const maxSlideNum = slideItems.length - 1
let activeNum = 0
slideItems[0].classList.add('active')

setInterval(function () {
    slideItems[activeNum].classList.remove('active')
    activeNum = activeNum === maxSlideNum ? 0 : activeNum + 1
    slideItems[activeNum].classList.add('active')
}, 2000)