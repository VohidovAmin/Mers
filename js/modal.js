const modalBtn = document.querySelector('.more');
const modal = document.querySelector('.modal');

modalBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
})

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('overlay') || e.target.classList.contains('modal__close')) {
        modal.classList.add('hidden');
    }
})