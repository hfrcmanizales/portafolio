import React from "react";
import "../css/clima.css";

// 1. Define una interfaz para las propiedades (props) del componente Clear
interface ClearProps {
  // 'limpia' es una función que no toma ningún argumento y no devuelve nada (void).
  limpia: () => void;
}

// 2. Aplica la interfaz 'ClearProps' a las props de tu componente funcional
function Clear({ limpia }: ClearProps) {
  return (
    <div onClick={limpia} className="boton-clear">
      <h2>Clear</h2>
    </div>
  );
}

export default Clear;