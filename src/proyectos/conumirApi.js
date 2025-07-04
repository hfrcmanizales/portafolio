import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import "../css/clima.css";
function ConsumirApi() {
    const [api, setApi] = useState([]);
    const limit = 20;
    const [currentPage, setCurrentPage] = useState(1);
    async function Api() {
        const resApi = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${currentPage}`);
        const res = await resApi.json();
        console.log(res);
        setApi(res);
    }
    useEffect(() => {
        Api();
    }, [currentPage]);
    return (_jsxs("div", { className: "apis", children: [_jsxs("div", { style: {
                    maxWidth: "900px",
                    margin: "2rem auto",
                    backgroundColor: "#f9f9f9",
                    padding: "1.5rem",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Arial, sans-serif",
                    color: "#333",
                    lineHeight: "1.6"
                }, children: [_jsx("h3", { style: { color: "#2c3e50", marginBottom: "1rem" }, children: "Proyecto: Consumo de API con Galer\u00EDa de Im\u00E1genes y paginacion" }), _jsxs("p", { children: ["Este componente en React consume una API p\u00FAblica de fotos utilizando ", _jsx("strong", { children: "fetch" }), " y maneja el estado con ", _jsx("strong", { children: "useState" }), " y ", _jsx("strong", { children: "useEffect" }), "."] }), _jsxs("ul", { style: { paddingLeft: "1.2rem", marginTop: "0.5rem" }, children: [_jsxs("li", { children: ["Se muestran 20 im\u00E1genes por p\u00E1gina usando ", _jsx("code", { children: "?_limit=20" }), "."] }), _jsx("li", { children: "Se implementa una paginaci\u00F3n b\u00E1sica para navegar entre p\u00E1ginas." }), _jsxs("li", { children: ["El layout usa ", _jsx("strong", { children: "CSS Grid responsive" }), " con ", _jsx("code", { children: "auto-fit" }), " y ", _jsx("code", { children: "minmax" }), " para adaptarse a distintos tama\u00F1os de pantalla."] }), _jsx("li", { children: "El dise\u00F1o incluye botones estilizados para mejorar la experiencia de usuario." })] }), _jsxs("p", { style: { marginTop: "1rem" }, children: ["Las im\u00E1genes se cargan din\u00E1micamente desde ", _jsx("code", { children: "picsum.photos" }), " usando el ", _jsx("strong", { children: "ID de cada imagen" }), " como semilla para obtener resultados \u00FAnicos."] })] }), _jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }, children: api.map((photo) => (_jsxs("div", { style: { textAlign: "center", border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }, children: [_jsx("img", { src: `https://picsum.photos/seed/${photo.id}/150`, alt: photo.title }), _jsx("p", { children: photo.title })] }, photo.id))) }), _jsxs("div", { style: { marginTop: "1rem", display: "flex", justifyContent: "center", gap: "1rem" }, children: [_jsx("button", { onClick: () => setCurrentPage((p) => Math.max(p - 1, 1)), disabled: currentPage === 1, style: {
                            padding: "0.5rem 1rem",
                            backgroundColor: "#007bff",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            opacity: currentPage === 1 ? 0.5 : 1
                        }, children: "Anterior" }), _jsx("button", { onClick: () => setCurrentPage((p) => p + 1), style: {
                            padding: "0.5rem 1rem",
                            backgroundColor: "#28a745",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }, children: "Siguiente" })] })] }));
}
export default ConsumirApi;
