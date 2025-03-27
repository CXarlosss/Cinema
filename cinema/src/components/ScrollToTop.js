import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Este componente se encarga de hacer scroll al principio de la página cada vez que se cambia de ruta
export function ScrollToTop() {
  // Extraemos la propiedad `pathname` de la ubicación actual (la ruta en la que estamos)
  const { pathname } = useLocation();

  useEffect(() => {
    // Cuando cambia el pathname (es decir, navegamos a otra página), hacemos scroll al inicio (0, 0)
    window.scrollTo(0, 0);
  }, [pathname]); // El efecto se ejecuta cada vez que cambia la ruta

  // Este componente no necesita renderizar nada en pantalla
  return null;
}
