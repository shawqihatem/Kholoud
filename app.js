const navigation = document.querySelector('.navigation__menu')
const navigationToggler = document.querySelector('.navigation__toggler')
const navigationClose = document.querySelector('.navigation__close')

navigationToggler.addEventListener('click', () => {
  navigation.classList.add('navigation__menu--opened')
})

navigationClose.addEventListener('click', () => {
  navigation.classList.remove('navigation__menu--opened')
})