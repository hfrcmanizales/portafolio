import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "../css/contenido.css";
import { useModo } from "../context/modoOscuro";
import axios from "axios";
function ContactForm() {
    const { modoDark, togleModoDark } = useModo();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [responseMessage, setResponseMessage] = useState(null);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://envia-correo-production.up.railway.app/envia", formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 200) {
                setResponseMessage('Mensaje enviado correctamente.');
                setFormData({ name: '', email: '', message: '' });
            }
        }
        catch (error) {
            if (error.response) {
                setResponseMessage(`Error del servidor: ${error.response.data.message}`);
            }
            else {
                setResponseMessage('Error de red al enviar el mensaje.');
            }
        }
    };
    return (_jsx("div", { id: "pies", className: modoDark ? "dark-mode" : "light-mode", children: _jsxs("form", { onSubmit: handleSubmit, className: "max-w-md mx-auto p-4 shadow-md rounded ", children: [_jsx("h2", { className: "text-xl font-semibold  mb-4", children: "Cont\u00E1ctanos" }), _jsxs("label", { className: "block mb-2", children: ["Nombre:", _jsx("input", { type: "text", name: "name", placeholder: "ingrese name", value: formData.name, onChange: handleChange, required: true, className: "w-full border p-2 mt-1 rounded" })] }), _jsxs("label", { className: "block mb-2", children: ["Email:", _jsx("input", { type: "email", name: "email", placeholder: "ingrese email", value: formData.email, onChange: handleChange, required: true, className: "w-full border p-2 mt-1 rounded" })] }), _jsxs("label", { className: "block mb-4", children: ["Mensaje:", _jsx("textarea", { name: "message", placeholder: "ingrese message", value: formData.message, onChange: handleChange, required: true, className: "w-full border p-2 mt-1 rounded" })] }), _jsx("button", { type: "submit", className: "bg-blue-500  px-4 py-2 rounded hover:bg-blue-600", children: "Enviar" }), responseMessage && (_jsx("p", { className: "mt-4 text-sm text-center", children: responseMessage }))] }) }));
}
;
export default ContactForm;
