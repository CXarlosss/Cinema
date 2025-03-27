// @ts-nocheck
// Importaciones necesarias
import React from "react";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch"; 
import { useTitle } from "../hooks/useTitle"; 
import { Card } from "../components"; 

// Componente de búsqueda
export const Search = ({ apiPath }) => {
  // Obtiene los parámetros de la URL (ej. ?q=batman)
  const [searchParams] = useSearchParams();

  // Extrae el término de búsqueda del parámetro "q"
  const queryTerm = searchParams.get("q");

  // Obtiene los resultados de la API usando el hook personalizado
  const { data: movies } = useFetch(apiPath, queryTerm);

  // Cambia el título del documento al resultado de búsqueda
  useTitle(`Search result for ${queryTerm}`);

  return (
    <main>
      {/* Mensaje sobre el estado del resultado */}
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length === 0
            ? `No result found for '${queryTerm}'`
            : `Result for '${queryTerm}'`}
        </p>
      </section>

      {/* Lista de tarjetas de películas */}
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
