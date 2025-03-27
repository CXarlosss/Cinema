// @ts-nocheck
// Importaciones necesarias
import React from 'react';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageNotFoundImage from "../assets/images/pagenotfound.png"; 
import { Button } from "../components"; 

// Componente para manejar rutas no encontradas
export const PageNotFound = () => {

  // Cambia el título del documento cuando se renderiza esta página
  useEffect(() => {
    document.title = `Page Not Found / Cinemate`;
  });

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        {/* Contenedor de imagen y texto */}
        <div className="flex flex-col items-center my-4">
          {/* Mensaje grande de error */}
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">
            404, Oops!
          </p>

          {/* Imagen del error */}
          <div className="max-w-lg">
            <img className="rounded" src={PageNotFoundImage} alt="404 Page Not Found" />
          </div>
        </div>

        {/* Botón que redirige al home */}
        <div className="flex justify-center my-4">
          <Link to="/">
            <Button>Back To Cinemate</Button>
          </Link>          
        </div>
      </section>
    </main>
  );
}
