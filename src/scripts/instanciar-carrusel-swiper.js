import Swiper from './swiper-config';

export function nuevoCarrusel(selectorDeContenedor, opciones) {
    return new Swiper(selectorDeContenedor, opciones);
}