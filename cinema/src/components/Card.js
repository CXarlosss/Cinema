// @ts-nocheck

import { Link } from "react-router-dom";
import Backup from "../assets/images/backup.png"
import React from "react";

// Componente funcional Card que recibe un objeto "movie" como prop
export const Card = ({ movie }) => {
  // Extraemos las propiedades relevantes del objeto movie
  const { id, original_title, overview, poster_path } = movie;

  // Definimos la imagen que se mostrará. Si hay poster_path, usamos la URL de la API de TMDB, si no, usamos la imagen de respaldo
  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : Backup;

  return (
    // Contenedor de la tarjeta con estilos de Tailwind para color, bordes y sombras
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
      
      {/* Al hacer clic en la imagen, se navega a la página de detalles de la película usando su ID */}
      <Link to={`/movie/${id}`}>
        <img className="rounded-t-lg" src={image} alt="" />
      </Link>

      {/* Contenedor del contenido de texto de la tarjeta */}
      <div className="p-5">
        {/* Título de la película con enlace a su página de detalle */}
        <Link to={`/movie/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {original_title}
          </h5>
        </Link>

        {/* Descripción de la película */}
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {overview}
        </p>
      </div>
    </div>
  );
};
