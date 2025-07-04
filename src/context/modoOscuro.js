import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useContext, createContext } from "react";
const modoProvider = createContext({ modoDark: false, togleModoDark: () => { } });
export const useModo = () => {
    const context = useContext(modoProvider);
    if (!context) {
        throw new Error("context no existe");
    }
    return context;
};
function ModoOscuro({ children }) {
    const [modoDark, setModoDark] = useState(false);
    const togleModoDark = () => {
        setModoDark(state => !state);
    };
    return (_jsx(modoProvider.Provider, { value: { modoDark, togleModoDark }, children: children }));
}
export default ModoOscuro;
