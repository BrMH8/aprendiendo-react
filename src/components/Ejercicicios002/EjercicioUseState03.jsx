import { useState } from 'react';

export const EjercicioUseState03 = () => {
    const imagenOriginal = {
        src: 'src/assets/descarga.jpeg',
        altText: 'Imagen original',
        tituloImagen: 'Original'
    };

    const imagenNueva = {
        src: 'src/assets/xd.jpeg', 
        altText: 'Imagen nueva',
        tituloImagen: 'Nueva'
    };

    const [textoBoton, setTextoBoton] = useState('Cambiar imagen');
    const [imagen, setImagen] = useState(imagenOriginal);
    const [esOriginal, setEsOriginal] = useState(true);

    const cambiarImagen = () => {
        if (esOriginal) {
            setImagen(imagenNueva);
            setTextoBoton('Regresar a imagen original');
            setEsOriginal(false);
        } else {
            setImagen(imagenOriginal);
            setTextoBoton('Cambiar imagen');
            setEsOriginal(true);
        }
    };

    return (
        <div className="col-12 text-center">
            <img
                src={imagen.src}
                alt={imagen.altText}
                title={imagen.tituloImagen}
                width="200px"
                height="200px"
                className="rounded mx-auto d-block mb-4"
            />
            <button className="btn btn-warning w-50 mb-5" onClick={cambiarImagen}>
                {textoBoton}
            </button>
        </div>
    );
};
