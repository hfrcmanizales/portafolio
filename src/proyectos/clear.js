import { jsx as _jsx } from "react/jsx-runtime";
import "../css/clima.css";
// 2. Aplica la interfaz 'ClearProps' a las props de tu componente funcional
function Clear({ limpia }) {
    return (_jsx("div", { onClick: limpia, className: "boton-clear", children: _jsx("h2", { children: "Clear" }) }));
}
export default Clear;
