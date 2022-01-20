

const iconMenu = document.querySelector('.menu-icon')
const menuBody = document.querySelector('.mobile-header')


if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        iconMenu.classList.toggle('_active')
        menuBody.classList.toggle('_active')
    })
}

const mobileItem = document.querySelector('.mobile');
mobileItem.addEventListener('click', function (e) {
    iconMenu.classList.remove('_active')
    menuBody.classList.remove('_active')
})