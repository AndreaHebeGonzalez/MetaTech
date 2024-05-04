import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

async function convertImages() {
    try {
        await imagemin(['src/assets/img/*.{jpg,png}'], {
            destination: 'src/assets/img',
            plugins: [
                imageminWebp({
                quality: 75 
                })
            ]
        });
        console.log('¡Conversión de imágenes completada con éxito!');
    } catch (error) {
    console.error('Error al convertir imágenes:', error);
    }
}

convertImages();