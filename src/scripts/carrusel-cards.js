import { nuevoCarrusel } from './instanciar-carrusel-swiper';

const carruselOpciones = {
    
    navigation: {
        nextEl: '.ofertas__arrow-right',
        prevEl: '.ofertas__arrow-left',
    },
    
    breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		680: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
		1400: {
			slidesPerView: 5,
			spaceBetween: 20,
		},
    }
}

nuevoCarrusel('.carrusel__productos', carruselOpciones);