import React from "react";
import "../css/autentication.css"


const Tatu = () => {
  return (
   <div className="proyecto-container">
  <div className="proyecto-card">
    <h1 className="proyecto-title">
      Página web de tatuajes
    </h1>

    <p className="proyecto-description">
      Este proyecto es una página web diseñada para un salón de tatuajes, con el objetivo de presentar profesionalmente el trabajo artístico de sus tatuadores y facilitar la conexión con nuevos clientes.
    </p>

    <p>
      La plataforma cuenta con un diseño moderno y atractivo, completamente <strong>responsive</strong>, lo que garantiza una excelente experiencia tanto en computadoras como en dispositivos móviles. Se muestran galerías con los tatuajes realizados por el equipo, secciones informativas sobre los estilos que manejan, y se integran opciones de contacto para agendar citas o realizar consultas.
    </p>

    <p>
      El enfoque visual del sitio busca reflejar la identidad del salón, utilizando tipografías fuertes, imágenes de alta calidad y una estructura clara para destacar el trabajo artístico. El proyecto está desarrollado con <strong>React</strong> y <strong>Vite</strong>, lo que permite una carga rápida y una experiencia fluida para el usuario.
    </p>

    <div className="proyecto-boton">
      <a
        href="https://tatu-blme.onrender.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver Proyecto en Render
      </a>
    </div>
  </div>
</div>

  );
};

export default Tatu;
