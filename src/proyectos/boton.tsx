import React from "react";
import "../css/clima.css"




function Boton({agregar,children}){
   
   const isOperador = value=> isNaN(value)&&value!="."&&value!="="

	return(

		<div className={`boton-contenedor ${isOperador(children)?"operador":null}`}
        onClick={()=>agregar(children)}
		>
		  {children}
		</div>
		)
}

export default Boton;