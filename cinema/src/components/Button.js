import React from 'react'

// Definimos y exportamos el componente funcional Button
// Este componente acepta una prop llamada "children", que representa cualquier contenido que se pase entre las etiquetas <Button></Button>
export const Button = ({ children }) => {
  return (
    // Devolvemos un botón con clases de Tailwind CSS aplicadas para el diseño
    // Clases usadas:
    // - w-64: ancho fijo de 16rem
    // - text-xl: tamaño de fuente grande
    // - text-white: texto blanco
    // - bg-gradient-to-r: fondo con gradiente de izquierda a derecha
    // - from-blue-500 via-blue-600 to-blue-700: colores del gradiente
    // - rounded-lg: bordes redondeados grandes
    // - px-5 py-2.5: padding horizontal y vertical
    // - mr-2 mb-2: margen derecho e inferior
    // - font-medium: grosor medio de la fuente
    <button className='w-64 text-xl text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium'>
      {children} {/* Mostramos el contenido que se pasa como hijo del componente */}
    </button>
  )
}
