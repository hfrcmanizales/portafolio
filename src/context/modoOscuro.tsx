import react,{useState,ReactNode,useContext,createContext} from "react";

interface Context {
	modoDark:boolean,
	togleModoDark:()=>void
}



const modoProvider = createContext<Context|null>({modoDark:false,togleModoDark:()=>{}})

export const useModo = ()=>{
	const context = useContext(modoProvider)
	if(!context){
		throw new Error("context no existe")
	}
	return context
}

interface ThemeProviderProps {
  children: ReactNode;
}


function ModoOscuro({children}:ThemeProviderProps){
   
   const [modoDark,setModoDark]=useState<boolean>(false)
   const togleModoDark = ()=>{
   	   setModoDark(state=>!state)
   } 
  
  return (
    <modoProvider.Provider value={{modoDark,togleModoDark}}>
    {children}
   </modoProvider.Provider>
  	)

   
}

export default ModoOscuro;