import React from 'react';
import { Link } from 'react-router-dom';

// Componente funcional Footer
const Footer = () => {
  return (
    // Etiqueta <footer> con clases de Tailwind para estilos claros y oscuros
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      
      {/* Texto con derechos reservados y enlace a la página principal */}
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2030 <Link to="/" className="hover:underline">Cinemate</Link>. All Rights Reserved.
      </span>
      
      {/* Lista de enlaces sociales alineada en horizontal con responsive design */}
      <ul className='flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0'>
        
        {/* Enlace a Instagram (abre en nueva pestaña) */}
        <li>
          <a
            href="https://www.instagram.com/carlospetronila"
            target='_blank'
            rel='noreferrer'
            className='mr-4 hover:underline md:mr-6'
          >
            Instagram
          </a>
        </li>

        {/* Enlace a LinkedIn */}
        <li>
          <a
            href="https://www.linkedin.com/in/carlos-de-petronila-rodriguez"
            target="_blank"
            rel="noreferrer"
            className="mr-4 hover:underline md:mr-6"
          >
            LinkedIn
          </a>
        </li>

        {/* Enlace a GitHub */}
        <li>
          <a
            href="https://github.com/CXarlosss"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
}

// Exportamos el componente Footer como default para poder usarlo en otros archivos
export default Footer;
