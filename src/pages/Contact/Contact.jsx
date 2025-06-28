import React, { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef();
  const [formEnviado, setFormEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulación de envío exitoso
    setFormEnviado(true);

    // Limpiar formulario
    formRef.current.reset();

    // Ocultar mensaje de éxito después de 3 segundos
    setTimeout(() => {
      setFormEnviado(false);
    }, 3000);
  };

  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold mb-6">Contáctame</h3>

        {formEnviado && (
          <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
            ✅ ¡Mensaje enviado con éxito!
          </div>
        )}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-4"
        >
          <input
            type="text"
            name="Nombre"
            placeholder="Tu nombre"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="email"
            name="Correo"
            placeholder="Tu correo"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <textarea
            name="Mensaje"
            placeholder="Tu mensaje"
            className="w-full px-4 py-2 border rounded"
            rows="4"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
