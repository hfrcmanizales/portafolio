import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "../css/clima.css";
import Boton from "./boton";
import Pantaya from "./pantaya";
import Clear from "./clear";
import { evaluate } from "mathjs";
function Calculadora() {
    const [input, setInput] = useState("");
    const agregarInput = (value) => {
        setInput(input + value);
    };
    const LimpiarInput = () => {
        setInput("");
    };
    const calcular = () => {
        if (input) {
            setInput(evaluate(input));
        }
        else {
            alert("ingresa datos validos");
        }
    };
    return (_jsx("div", { children: _jsxs("div", { className: "contenedor-calculadora", children: [_jsx(Pantaya, { input: input }), _jsxs("div", { className: "fila", children: [_jsx(Boton, { agregar: agregarInput, children: "1" }), _jsx(Boton, { agregar: agregarInput, children: "2" }), _jsx(Boton, { agregar: agregarInput, children: "3" }), _jsx(Boton, { agregar: agregarInput, children: "+" })] }), _jsxs("div", { className: "fila", children: [_jsx(Boton, { agregar: agregarInput, children: "4" }), _jsx(Boton, { agregar: agregarInput, children: "5" }), _jsx(Boton, { agregar: agregarInput, children: "6" }), _jsx(Boton, { agregar: agregarInput, children: "-" })] }), _jsxs("div", { className: "fila", children: [_jsx(Boton, { agregar: agregarInput, children: "7" }), _jsx(Boton, { agregar: agregarInput, children: "8" }), _jsx(Boton, { agregar: agregarInput, children: "9" }), _jsx(Boton, { agregar: agregarInput, children: "/" })] }), _jsxs("div", { className: "fila", children: [_jsx(Boton, { agregar: agregarInput, children: "0" }), _jsx(Boton, { agregar: agregarInput, children: "." }), _jsx(Boton, { agregar: calcular, children: "=" }), _jsx(Boton, { agregar: agregarInput, children: "*" })] }), _jsx("div", { className: "fila", children: _jsx(Clear, { limpia: LimpiarInput }) })] }) }));
}
export default Calculadora;
