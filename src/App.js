import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import './App.css';
import ModoOscuro from "./context/modoOscuro";
import Header from "./componentes/header";
import Contenido from "./componentes/contenido";
import Footer from "./componentes/footer";
import { Routes, Route } from "react-router-dom";
import About from "./pages/sobremi";
import ContactForm from "./pages/contacto";
import Proyect from "./pages/proyectos";
function App() {
    return (_jsx(_Fragment, { children: _jsxs(ModoOscuro, { children: [_jsx(Header, {}), _jsx(Contenido, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/contacto", element: _jsx(ContactForm, {}) }), _jsx(Route, { path: "/proyectos", element: _jsx(Proyect, {}) })] }), _jsx(Footer, {})] }) }));
}
export default App;
