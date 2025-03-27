// @ts-nocheck
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { Card } from "../components";

// Componente principal que recibe `apiPath` y `title` como props
export const MovieList = ({ apiPath, title }) => {
  // Llama al hook useFetch para obtener los datos desde la API según el path proporcionado
  const { data: movies } = useFetch(apiPath);

  // Cambia el título de la página
  useTitle(title);

  return (
    <main>
      {/* Sección principal centrada y con espacio vertical */}
      <section className="max-w-7xl mx-auto py-7">
        {/* Contenedor de las tarjetas de películas con estilos responsivos */}
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {/* Mapea los datos obtenidos de la API y renderiza una Card por cada película */}
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
