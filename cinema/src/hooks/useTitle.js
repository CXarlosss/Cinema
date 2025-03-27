import { useEffect } from "react";

// Exportamos el hook personalizado useTitle
// Este hook se encarga de cambiar dinámicamente el título de la pestaña del navegador
export const useTitle = (title) => {

    // useEffect se ejecuta cada vez que cambia el valor de 'title'
    useEffect(() => {
        // Cambiamos el título de la pestaña del navegador con el formato: "Título / Cinemate"
        document.title = `${title} / Cinemate`;
    }, [title]); // El efecto se vuelve a ejecutar solo si cambia 'title'

    // Este hook no necesita retornar nada porque solo realiza un efecto secundario
    return null;
}
