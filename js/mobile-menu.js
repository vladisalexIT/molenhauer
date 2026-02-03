const mobileMenuNode = document.querySelector('#mobile-menu')
const burgerBtnNode = document.querySelector('#burger')
const overlayNode = document.querySelector('#menu-overlay')

burgerBtnNode.addEventListener('click', toggleMenu)
overlayNode.addEventListener('click', closeMenu)

function toggleMenu() {
  const isActive = mobileMenuNode.classList.contains('_active')
  
  mobileMenuNode.classList.toggle('_active')
  burgerBtnNode.classList.toggle('_active')
  overlayNode.classList.toggle('_active')
  
  if (!isActive) {
    document.body.classList.add('menu-open')
  } else {
    document.body.classList.remove('menu-open')
  }
}

function closeMenu() {
  mobileMenuNode.classList.remove('_active')
  burgerBtnNode.classList.remove('_active')
  overlayNode.classList.remove('_active')
  document.body.classList.remove('menu-open')
}