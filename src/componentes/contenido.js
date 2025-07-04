import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "../css/contenido.css";
import { useModo } from "../context/modoOscuro";
export default function Contenido() {
    const { modoDark, togleModoDark } = useModo();
    return (_jsx(_Fragment, { children: _jsx("div", { id: "mensaje", className: modoDark ? "dark-mode" : "light-mode", children: _jsxs("div", { className: "welcome-container", children: [_jsx("h1", { children: "Bienvenido a mi Portafolio" }), _jsx("p", { children: "\u00A1Hola! Soy un desarrollador web full-stack con conocimientos en React, Node.js y MongoDB. Me encanta construir aplicaciones web. Actualmente, estoy aprendiendo TypeScript y mejorando mis habilidades." }), _jsx("p", { children: "Disfruto poder crear y desarrollar." }), _jsx("p", { children: "A continuacion podras ver unos sencillos proyectos, pero que me ayudaron a entender conceptos basicos de la programcion, me encanta aprender y seguir mejorando, espero poder darle un giro a mi vida profecional y poder adentrarme en este mundo de la programacion" })] }) }) }));
}
