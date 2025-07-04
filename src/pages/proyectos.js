import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useModo } from "../context/modoOscuro";
import { useState } from "react";
import "../css/clima.css";
import Crud from "../proyectos/crud";
import ConsumirApi from "../proyectos/conumirApi";
import Calculadora from "../proyectos/calculadora";
import ProyectoAuthCard from "../proyectos/autentication";
import Tatu from "../proyectos/tatu";
function Proyect() {
    const { modoDark, togleModoDark } = useModo();
    const [city, setCity] = useState("");
    const [error, setError] = useState(null);
    const [clima, setClima] = useState(null);
    const key = "b8472dafc7106d7c43c2c5ac712b05c2";
    const change = async (e) => {
        e.preventDefault();
        try {
            //busca la ciudad//
            const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${key}`);
            const response = await res.json();
            console.log(response);
            //si no la encuentra returna//
            if (!response) {
                setError("ciudad no encontrada");
                return;
            }
            //desestruturo la latitud y longitu del la respuesta//
            const { lat, lon, name } = response[0];
            //ahora busco el clima//
            const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`);
            console.log(weather);
            const weatheres = await weather.json();
            setClima({
                name: weatheres.name,
                temp: weatheres.main.temp,
                humidity: weatheres.main.humidity,
                wind_speed: weatheres.wind.speed
            });
            setCity("");
        }
        catch (error) {
            setError("no se encontro");
            setTimeout(() => {
                setError(null);
            }, 4000);
        }
    };
    return (_jsxs("div", { className: modoDark ? "dark-mode" : "light-mode", children: [_jsxs("div", { id: "primer-proyecto", className: " container d-flex justify-content-center align-items-center mt-0 vh-100", children: [_jsx("div", { className: "container d-flex justify-content-center align-items-center vh-100", children: _jsx("div", { className: "bg-light p-4 rounded shadow-sm", children: _jsxs("p", { className: "text-muted", children: ["En este proyecto, se est\u00E1 consumiendo la API de ", _jsx("strong", { className: "text-primary", children: "OpenWeather" }), ". Con la cual estamos consultando la temperatura de las ciudades del mundo. Para este peque\u00F1o proyecto utilic\u00E9", _jsx("span", { className: "badge bg-secondary ms-2", children: "TypeScript" }), ",", _jsx("span", { className: "badge bg-info text-dark ms-2", children: "Bootstrap" }), ",", _jsx("span", { className: "badge bg-warning text-dark ms-2", children: "CSS" }), ",", _jsx("span", { className: "badge bg-success ms-2", children: "React" }), ",", _jsx("span", { className: "badge bg-dark ms-2", children: "Fetch" }), " y", _jsx("span", { className: "badge bg-primary ms-2", children: "useState" }), "."] }) }) }), _jsxs("div", { id: "fondo", className: "card shadow-lg p-4", style: { width: "100%" }, children: [_jsxs("form", { className: "w-100", onSubmit: change, children: [_jsxs("div", { className: "mb-3 w-80", children: [_jsx("label", { htmlFor: "nombre", className: "form-label", children: "Ciudad" }), _jsx("input", { value: city, onChange: (e) => setCity(e.target.value), type: "text", className: "form-control w-100", id: "nombre", placeholder: "nombre de ciudad", required: true })] }), _jsx("div", { className: "d-grid", children: _jsx("button", { type: "submit", className: "btn btn-primary", children: "Enviar" }) })] }), error && _jsx("div", { className: "alert alert-danger text-center", children: error }), clima && (_jsx("div", { className: "card w-75 mx-auto shadow", children: _jsxs("div", { className: "card-body text-center", children: [_jsx("h5", { className: "card-title", children: clima.name }), _jsxs("p", { className: "card-text", children: ["\uD83C\uDF21\uFE0F Temperatura: ", clima.temp, " \u00B0C"] }), _jsxs("p", { className: "card-text", children: ["\uD83D\uDCA7 Humedad: ", clima.humidity, "%"] }), _jsxs("p", { className: "card-text", children: ["\uD83D\uDCA8 Viento: ", clima.wind_speed, " m/s"] })] }) }))] })] }), _jsxs("div", { className: "crud-titulo", children: [_jsxs("p", { children: ["\uD83D\uDEE0\uFE0F", _jsx("strong", { children: " Proyecto: CRUD Visual con React y TypeScript" })] }), _jsx("h4", { children: "Descripci\u00F3n del proyecto:" }), _jsx("p", { children: "Este proyecto es una interfaz CRUD (Crear, Leer, Actualizar y Eliminar) desarrollada con React, TypeScript y estilos personalizados en CSS. Permite al usuario agregar, editar y eliminar registros de manera din\u00E1mica sin necesidad de conectarse a una base de datos externa. Todo se maneja desde el estado interno de React." }), _jsx("h6", { children: "\u00BFQu\u00E9 hace este CRUD?" }), _jsx("strong", { children: "Crear" }), ": Permite ingresar un nombre y una acci\u00F3n, y guardarlos como un nuevo registro.", _jsx("strong", { children: "Leer" }), ": Muestra una tabla con todos los registros agregados.", _jsx("strong", { children: " Actualizar" }), ": Puedes editar cualquier registro existente desde la misma interfaz.", _jsx("strong", { children: " Eliminar" }), ": Puedes borrar un registro en cualquier momento.", _jsx("p", { children: "\u00BFC\u00F3mo lo hice? Utilic\u00E9 React con Vite como entorno de desarrollo para lograr una aplicaci\u00F3n r\u00E1pida y modular. Implement\u00E9 TypeScript para asegurar el tipado fuerte y evitar errores en tiempo de desarrollo. Manej\u00E9 los datos con el hook useState, creando un arreglo de objetos para representar cada entrada. La l\u00F3gica para editar funciona identificando cada registro por un id \u00FAnico generado con Date.now(). El dise\u00F1o es completamente responsive, adapt\u00E1ndose a pantallas m\u00F3viles y de escritorio. Apliqu\u00E9 CSS personalizado para lograr un estilo limpio, moderno y f\u00E1cil de leer." }), _jsx(Crud, {})] }), _jsx(ConsumirApi, {}), _jsxs("div", { className: "crud-titulo", children: [_jsxs("section", { className: "proyecto", children: [_jsx("h2", { children: " Calculadora React + TypeScript" }), _jsxs("p", { children: ["Este proyecto consiste en una ", _jsx("strong", { children: "calculadora interactiva" }), " desarrollada con ", _jsx("strong", { children: "React y TypeScript" }), ", capaz de realizar operaciones matem\u00E1ticas b\u00E1sicas (suma, resta, multiplicaci\u00F3n, divisi\u00F3n y decimales). Es una aplicaci\u00F3n pr\u00E1ctica que demuestra la manipulaci\u00F3n del estado, la composici\u00F3n de componentes y el manejo de expresiones con la librer\u00EDa ", _jsx("code", { children: "mathjs" }), "."] }), _jsx("h3", { children: " Caracter\u00EDsticas principales:" }), _jsxs("ul", { children: [_jsxs("li", { children: [" ", _jsx("strong", { children: "React + TypeScript" }), ": c\u00F3digo tipado, modular y mantenible."] }), _jsxs("li", { children: [" ", _jsx("strong", { children: "Operaciones matem\u00E1ticas en tiempo real" }), " gracias a ", _jsx("code", { children: "mathjs" }), "."] }), _jsxs("li", { children: [" ", _jsx("strong", { children: "Componentes reutilizables" }), ": botones (", _jsx("code", { children: "Boton" }), "), pantalla (", _jsx("code", { children: "Pantaya" }), ") y bot\u00F3n de limpieza (", _jsx("code", { children: "Clear" }), ")."] }), _jsxs("li", { children: [" ", _jsx("strong", { children: "Dise\u00F1o responsivo" }), " y personalizable con CSS."] }), _jsxs("li", { children: [" ", _jsx("strong", { children: "Validaci\u00F3n simple" }), ": evita c\u00E1lculos vac\u00EDos con alertas para el usuario."] }), _jsxs("li", { children: [" ", _jsx("strong", { children: "Estado global del input" }), " con ", _jsx("code", { children: "useState" }), " que se actualiza din\u00E1micamente al presionar los botones."] })] }), _jsx("h3", { children: " Tecnolog\u00EDas utilizadas:" }), _jsxs("ul", { children: [_jsx("li", { children: "React (con Vite)" }), _jsx("li", { children: "TypeScript" }), _jsx("li", { children: "MathJS (evaluaci\u00F3n de expresiones)" }), _jsx("li", { children: "CSS personalizado" })] }), _jsx("h3", { children: " \u00BFQu\u00E9 aprend\u00ED con este proyecto?" }), _jsxs("p", { children: ["- C\u00F3mo dividir una UI en componentes reutilizables en React.", _jsx("br", {}), "- Uso de eventos personalizados para construir una calculadora desde cero.", _jsx("br", {}), "- Evaluar expresiones matem\u00E1ticas de forma segura con ", _jsx("code", { children: "mathjs" }), ".", _jsx("br", {}), "- Aplicar l\u00F3gica condicional y validaci\u00F3n b\u00E1sica en formularios interactivos."] })] }), _jsx(Calculadora, {})] }), _jsx(ProyectoAuthCard, {}), _jsx(Tatu, {})] }));
}
export default Proyect;
