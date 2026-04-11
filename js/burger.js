const burger = document.querySelector('.humburger-menu');
const menu = document.querySelector('.menu');
const menuLink = document.querySelectorAll('.menu-list__link');

const toggleMenu = () => {
    menu.classList.toggle('menu-active');
    burger.classList.toggle('humburger-menu-active')
}

burger.addEventListener('click', toggleMenu);

menu.addEventListener('click', (e) => {
    menuLink.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('menu-active')
        })
    })
})
