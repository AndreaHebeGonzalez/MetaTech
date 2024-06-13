const cardList = Array.from(document.querySelectorAll('.card-1'));


cardList.forEach(card => {

    card.addEventListener('mouseenter', (e) => {
        const accionesCard = e.target.querySelector('.card-1__acciones');
        accionesCard.style.transition = 'transform .3s ease, opacity .3s ease .15s, visibility .3s ease .15s';
        accionesCard.classList.add('mostrar-acciones');
    });

    card.addEventListener('mouseleave', (e) => {
        const accionesCard = e.target.querySelector('.card-1__acciones');
        accionesCard.style.transition = 'transform .3s ease .2s, opacity .3s ease .15s, visibility .3s';
        accionesCard.classList.remove('mostrar-acciones');
    });
});