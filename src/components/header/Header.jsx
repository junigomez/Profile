import React from "react";
import cvIsrael from "../../assets/documents/CV_ISRAEL.pdf";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Israel Amaya</h1>

        <nav className="space-x-6 hidden md:flex">
          <a
            href="#hero"
            className="text-gray-700 font-bold hover:text-blue-500"
          >
            Sobre mí
          </a>
          <a
            href="#skills"
            className="text-gray-700 font-bold hover:text-blue-500"
          >
            Habilidades
          </a>
          <a
            href="#projects"
            className="text-gray-700 font-bold hover:text-blue-500"
          >
            Proyectos
          </a>
          <a
            href="#gallery"
            className="text-gray-700 font-bold hover:text-blue-500"
          >
            Galeria
          </a>
          <a
            href="#contact"
            className="text-gray-700 font-bold hover:text-blue-500"
          >
            Contacto
          </a>
        </nav>

        <a
          href={cvIsrael}
          download
          className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Descargar CV
        </a>
      </div>
    </header>
  );
};

export default Header;
