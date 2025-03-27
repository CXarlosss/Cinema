// @ts-nocheck
import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import React from "react";

// Componente principal del Header
export const Header = () => {
  // Estado para mostrar/ocultar el menú móvil
  const [hidden, setHidden] = useState(true);
  // Estado para controlar el modo oscuro, leído de localStorage
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const navigate = useNavigate();

  // Efecto para aplicar el modo oscuro en el documento HTML y guardarlo en localStorage
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Clases para navegación activa e inactiva
  const activeClass =
    "text-base block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white";
  const inActiveClass =
    "text-base block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

  // Maneja la búsqueda del formulario y navega con el término
  const handleSubmit = (event) => {
    event.preventDefault();
    const queryTerm = event.target.search.value;
    event.target.reset();
    return navigate(`/search?q=${queryTerm}`);
  };

  return (
    <header>
      {/* Barra de navegación */}
      <nav className="bg-white border-b-2 border-gray-200 px-2 sm:px-4 py-2 dark:bg-gray-900 dark:border-b-1 dark:border-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto">

          {/* Logo e icono */}
          <Link to="/" className="flex items-center">
            <img src={Logo} className="mr-2 h-8 sm:h-9" alt="Cinemate Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Cinemate
            </span>
          </Link>

          {/* Botones de modo oscuro, búsqueda y menú móvil */}
          <div id="mobile-nav" className="flex md:order-2">

            {/* Botón para activar/desactivar modo oscuro */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              type="button"
              className="flex items-center p-2 mr-2 text-xs font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              {/* Íconos del botón según el estado actual */}
              {darkMode ? (
                // Icono de sol (modo claro)
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
              ) : (
                // Icono de luna (modo oscuro)
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              )}
            </button>

            {/* Botón para abrir menú de navegación móvil */}
            <button
              onClick={() => setHidden(!hidden)}
              type="button"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-2.5 mr-1"
            >
              {/* Icono de búsqueda */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                ></path>
              </svg>
            </button>

            {/* Campo de búsqueda solo visible en pantallas grandes */}
            <div className="hidden relative md:block">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  ></path>
                </svg>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="search"
                  className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Search..."
                  autoComplete="off"
                />
              </form>
            </div>

            {/* Icono hamburguesa para abrir menú móvil */}
            <button
              onClick={() => setHidden(!hidden)}
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                ></path>
              </svg>
            </button>
          </div>

          {/* Menú de navegación principal, responsive */}
          <div
            className={`${hidden ? "hidden" : ""} justify-between items-center w-full md:flex md:w-auto md:order-1`}
            id="navbar-search"
          >
            {/* Campo de búsqueda visible solo en móvil */}
            <div className="relative mt-3 md:hidden">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  ></path>
                </svg>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="search"
                  className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Search..."
                  autoComplete="off"
                />
              </form>
            </div>

            {/* Lista de enlaces de navegación */}
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900">
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : inActiveClass)} end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/movies/popular" className={({ isActive }) => (isActive ? activeClass : inActiveClass)}>
                  Popular
                </NavLink>
              </li>
              <li>
                <NavLink to="/movies/top" className={({ isActive }) => (isActive ? activeClass : inActiveClass)}>
                  Top Rated
                </NavLink>
              </li>
              <li>
                <NavLink to="/movies/upcoming" className={({ isActive }) => (isActive ? activeClass : inActiveClass)}>
                  Upcoming
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
