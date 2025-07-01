import React from "react";
import profileImg from "../../assets/img/imgHero/fondo.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Imagen */}
        <div className="flex justify-center mb-6">
          <img
            src={profileImg}
            alt="Foto de Israel"
            className="w-40 h-40 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>

        {/* Texto principal */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Hola, soy Israel
        </h2>
        <p className="text-lg sm:text-xl mb-6">
          Desarrollador de software y analista funcional | Apasionado por la
          tecnología
        </p>

        {/* Botón */}
        <a
          href="#contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Contáctame
        </a>
      </div>
    </section>
  );
};

export default Hero;
