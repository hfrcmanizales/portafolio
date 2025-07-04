import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useModo } from "../context/modoOscuro";
import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import "../app.css";
function Header() {
    //context
    const { modoDark, togleModoDark } = useModo();
    //abre menu responsive//
    const [menuOpen, setMenuOpen] = useState(false);
    return (_jsx("div", { className: modoDark ? "dark-mode" : "light-mode", children: _jsx("header", { className: "header w-100 bg-white bg-opacity-10  p-3 shadow", children: _jsxs("nav", { className: "navbar", children: [_jsx("h2", { className: "titulo", children: "WEB DEVELOPER" }), _jsx("button", { className: "menu-btn", onClick: () => setMenuOpen(!menuOpen), children: "\u2630" }), _jsxs("ul", { style: {
                            background: "rgba(255, 255, 255, 0.1)", // Fondo semitransparente
                            backdropFilter: "blur(10px)", // Efecto de desenfoque
                            border: "2px solid rgba(255, 255, 255, 0.3)",
                            borderRadius: "50px",
                            padding: "4px" // Borde sutil
                        }, className: `nav-links ${menuOpen ? "open" : ""}`, children: [_jsx("li", { children: _jsx(Link, { to: "/about", children: "sobre mi" }) }), _jsx("li", { children: _jsx(Link, { to: "/contacto", children: "contacto" }) }), _jsx("li", { children: _jsx(Link, { to: "/proyectos", children: "proyectos" }) }), _jsx("li", { children: _jsx("button", { onClick: togleModoDark, className: "botons", children: !modoDark ? _jsx(Sun, { size: 25 }) : _jsx(Moon, { size: 25 }) }) })] })] }) }) }));
}
export default Header;
