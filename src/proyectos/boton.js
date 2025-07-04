import { jsxs as _jsxs } from "react/jsx-runtime";
import "../css/clima.css";
// 2. Función isOperador con tipado explícito
// Toma un 'value' de tipo string y devuelve un booleano.
const isOperador = (value) => {
    // Convertimos 'value' a un número para que isNaN funcione correctamente.
    return isNaN(Number(value)) && value !== "." && value !== "=";
};
// 3. Componente Boton con Props tipadas
function Boton({ agregar, children }) {
    return (_jsxs("div", { 
        // Aplicamos la clase 'operador' si el 'children' (convertido a string) es un operador.
        className: `boton-contenedor ${isOperador(String(children)) ? "operador" : ""}`, 
        // Al hacer clic, llamamos a 'agregar' con el 'children' convertido a string.
        onClick: () => agregar(String(children)), children: [children, " "] }));
}
export default Boton;
