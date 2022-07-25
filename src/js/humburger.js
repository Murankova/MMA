const hamburger = document.querySelector('.hamburger')
const navigationLists = document.querySelector('.navigation__lists')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  navigationLists.classList.toggle('active')
})

document.querySelectorAll('.navigation__link').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active')
  navigationLists.classList.remove('active')
}))