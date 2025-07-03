import React from "react";
import "../css/autentication.css"


const ProyectoAuthCard = () => {
  return (
    <div className="proyecto-container">
      <div className="proyecto-card">
        <h1 className="proyecto-title">
          Proyecto FullStack de Autenticación
        </h1>

        <p className="proyecto-description">
          Este proyecto es una aplicación web completa que implementa un sistema
          de autenticación con <strong>JWT</strong>, <strong>cookies</strong>,
          <strong> bcryptjs</strong>, <strong>React</strong>,
          <strong>React Hook Form</strong> y un <strong>CRUD</strong> completo.
          El usuario debe registrarse o iniciar sesión para acceder.
        </p>

        <ul className="proyecto-list">
          <li>Frontend: React + CSS</li>
          <li>Formularios: React Hook Form</li>
          <li>Backend: Node.js + Express</li>
          <li>Base de datos: MongoDB</li>
          <li>cors, cookie-parse,dovten</li>
          <li>express-validator,mongoose</li>
          <li>Login con JWT + cookies seguras</li>
          <li>Desplegado en Render</li>
        </ul>

        <div className="proyecto-boton">
          <a
            href="https://proyecto-crud-1.onrender.com"
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

export default ProyectoAuthCard;
