 // @ts-nocheck

// Hooks de React y React Router
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// Hook personalizado para cambiar el título de la página
import { useTitle } from "../hooks/useTitle";
// Imagen de respaldo en caso de que no haya poster
import Backup from "../assets/images/backup.png"
import React from "react";

// Componente principal para ver el detalle de una película
export const MovieDetail = () => {
  // Obtenemos los parámetros de la URL (id de la película)
  const params = useParams();

  // Estado donde almacenaremos los datos de la película
  const [movie, setMovie] = useState({});

  // Cambia el título de la pestaña del navegador con el título de la película
  // eslint-disable-next-line
  const pageTitle = useTitle(movie.title);

  // Definimos qué imagen mostrar: el póster o la imagen de respaldo
  const image = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : Backup ;

  // Llamada a la API cuando cambia el parámetro `id`
  useEffect(() => {
    async function fetchMovie(){
      const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=b80d59c33d6d57ed9c7e3713f91c188a`);
      const json = await response.json();
      setMovie(json); // Guardamos la peli en el estado
      console.log(json); // (Opcional) Mostramos en consola para debug
    }
    fetchMovie(); // Ejecutamos la función
  }, [params.id]); // Se ejecuta cuando cambia el `id`

  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        {/* Imagen del póster */}
        <div className="max-w-sm">
          <img className="rounded" src={image} alt={movie.title} />
        </div>

        {/* Información detallada de la película */}
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
          {/* Título */}
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">{movie.title}</h1>

          {/* Descripción */}
          <p className="my-4">{movie.overview}</p>

          {/* Géneros (si existen) */}
          { movie.genres ? (
            <p className="my-7 flex flex-wrap gap-2">
              { movie.genres.map((genre) => (
                <span
                  className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2"
                  key={genre.id}
                >
                  {genre.name}
                </span>
              )) }
            </p>
          ) : "" }

          {/* Valoración y número de votos */}
          <div className="flex items-center">
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Rating star</title>
              <path d="..." />
            </svg>
            <p className="ml-2 text-gray-900 dark:text-white">{movie.vote_average}</p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="text-gray-900 dark:text-white">{movie.vote_count} reviews</span>
          </div>

          {/* Otros datos relevantes */}
          <p className="my-4"><span className="mr-2 font-bold">Runtime:</span>{movie.runtime} min.</p>
          <p className="my-4"><span className="mr-2 font-bold">Budget:</span>{movie.budget}</p>
          <p className="my-4"><span className="mr-2 font-bold">Revenue:</span>{movie.revenue}</p>
          <p className="my-4"><span className="mr-2 font-bold">Release Date:</span>{movie.release_date}</p>

          {/* Enlace a IMDb */}
          <p className="my-4">
            <span className="mr-2 font-bold">IMDB Code:</span>
            <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer">{movie.imdb_id}</a>
          </p>
        </div>
      </section>
    </main>
  );
}
