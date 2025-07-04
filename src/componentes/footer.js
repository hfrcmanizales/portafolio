import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useModo } from "../context/modoOscuro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
function Footer() {
    const { modoDark, togleModoDark } = useModo();
    return (_jsx("div", { className: modoDark ? "dark-mode" : "light-mode", children: _jsx("footer", { className: "text-light py-4 border-top border-light", children: _jsxs("div", { className: "container text-center", children: [_jsx("div", { className: "mb-3", children: _jsx("a", { href: "https://github.com/hfrcmanizales", className: "text-light me-3", target: "_blank", rel: "noopener noreferrer", children: _jsx(FontAwesomeIcon, { icon: faGithub, size: "3x", color: "black" }) }) }), _jsxs("p", { id: "pie", className: "mb-0", children: ["\u00A9 ", new Date().getFullYear(), " Fernando. Todos los derechos reservados."] }), _jsx("div", { className: "mt-3", children: _jsx("a", { href: "#", id: "arriba", className: "btn btn-primary", children: "Volver arriba" }) })] }) }) }));
}
export default Footer;
