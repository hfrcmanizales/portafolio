import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "../css/clima.css";
function Crud() {
    const [dato, setDato] = useState({ name: "", text: "", id: 0 });
    const [datos, setDatos] = useState([]);
    const [datosNuevos, setDatosNuevos] = useState({ name: "", text: "", id: 0 });
    const [abrir, setAbrir] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDato((prev) => ({
            ...prev,
            id: Date.now(),
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setDatos((state) => [...state, dato]);
        setDato({ name: "", text: "", id: 0 });
    };
    const eliminar = (id) => {
        setDatos((prev) => prev.filter((item) => item.id !== id));
    };
    const buscar = (id) => {
        const encontrado = datos.find((item) => item.id === id);
        if (encontrado) {
            setDatosNuevos(encontrado);
            setAbrir(true);
        }
    };
    const handleEditar = (e) => {
        const { name, value } = e.target;
        setDatosNuevos((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const submitEditar = (e) => {
        e.preventDefault();
        const actualizados = datos.map((item) => item.id === datosNuevos.id ? { ...item, name: datosNuevos.name, text: datosNuevos.text } : item);
        setDatos(actualizados);
        setAbrir(false);
    };
    return (_jsxs("div", { className: "container-crud", children: [_jsx("h2", { className: "crud-h2", children: "CRUD Visual" }), _jsxs("form", { className: "crud-form", onSubmit: handleSubmit, children: [_jsx("input", { onChange: handleChange, value: dato.name, name: "name", type: "text", placeholder: "Nombre", required: true }), _jsx("input", { onChange: handleChange, value: dato.text, name: "text", type: "text", placeholder: "Acci\u00F3n", required: true }), _jsx("button", { type: "submit", children: "Agregar" })] }), _jsx("div", { className: "table-responsive", children: _jsxs("table", { className: "crud-table", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Nombre" }), _jsx("th", { children: "Acci\u00F3n" }), _jsx("th", { children: "Opciones" })] }) }), _jsx("tbody", { children: datos.map((item) => (_jsxs("tr", { children: [_jsx("td", { children: item.name }), _jsx("td", { children: item.text }), _jsxs("td", { children: [_jsx("button", { className: "edit-btn", onClick: () => buscar(item.id), children: "Editar" }), _jsx("button", { className: "delete-btn", onClick: () => eliminar(item.id), children: "Eliminar" })] })] }, item.id))) })] }) }), abrir && (_jsxs("form", { className: "crud-form", onSubmit: submitEditar, children: [_jsx("input", { onChange: handleEditar, value: datosNuevos.name, name: "name", type: "text", placeholder: "Nombre", required: true }), _jsx("input", { onChange: handleEditar, value: datosNuevos.text, name: "text", type: "text", placeholder: "Acci\u00F3n", required: true }), _jsx("button", { type: "submit", children: "Guardar Cambios" })] }))] }));
}
export default Crud;
