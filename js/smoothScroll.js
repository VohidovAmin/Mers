const linksHead = document.querySelectorAll('.menu-list__link');
const mainScroll = document.querySelector('.main__scroll');
const newLinkList = [...linksHead, mainScroll];

newLinkList.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const currentId = e.target.getAttribute('href').substr(1);

        document.getElementById(currentId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
})