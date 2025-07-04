import React from "react";
import "../css/clima.css";

// 1. Interfaz de Propiedades (Props) del Componente Boton
interface Props {
  // 'agregar' es una función que toma una cadena (el valor del botón) y no devuelve nada.
  agregar: (value: string) => void;
  // 'children' puede ser texto, números, elementos JSX, etc.
  // El tipo correcto para esto es React.ReactNode.
  children: React.ReactNode;
}

// 2. Función isOperador con tipado explícito
// Toma un 'value' de tipo string y devuelve un booleano.
const isOperador = (value: string): boolean => {
  // Convertimos 'value' a un número para que isNaN funcione correctamente.
  return isNaN(Number(value)) && value !== "." && value !== "=";
};

// 3. Componente Boton con Props tipadas
function Boton({ agregar, children }: Props) {
  return (
    <div
      // Aplicamos la clase 'operador' si el 'children' (convertido a string) es un operador.
      className={`boton-contenedor ${isOperador(String(children)) ? "operador" : ""}`}
      // Al hacer clic, llamamos a 'agregar' con el 'children' convertido a string.
      onClick={() => agregar(String(children))}
    >
      {children} {/* Aquí se renderiza el contenido del botón */}
    </div>
  );
}

export default Boton;