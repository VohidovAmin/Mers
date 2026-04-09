const btns = document.querySelectorAll('.feature__link');
const lists = document.querySelectorAll('.feature-sub');

btns.forEach((btn, id) => {
    btn.addEventListener('click', () => {
        const isActive = btn.classList.contains('feature__link_active');
        
        btns.forEach(btn => {
            btn.classList.remove('feature__link_active')
        });

        lists.forEach(list => {
            list.classList.add('hidden')
        });

        if (isActive) {
            return
        }   

        btn.classList.add('feature__link_active');
        lists[id].classList.remove('hidden')
    })
})