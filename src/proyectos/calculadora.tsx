import React,{useState} from "react";
import "../css/clima.css"  
import Boton from "./boton"
import Pantaya from "./pantaya"
import Clear from "./clear";
import {evaluate} from "mathjs";



function Calculadora(){



const [input,setInput]=useState<string>("")
 
 const agregarInput = (value:string)=>{
 	setInput(input+value)
 }

 const LimpiarInput = ()=>{
 	setInput("")
 }


const calcular = ()=>{
	if(input){
		setInput(evaluate(input))
	}else{
		alert("ingresa datos validos")
	}
}



	return(
    <div>
    	
    	<div className="contenedor-calculadora">
    	      <Pantaya input={input}/>
    		<div className="fila">
    			<Boton agregar={agregarInput}>1</Boton>
    			<Boton agregar={agregarInput}>2</Boton>
    			<Boton agregar={agregarInput}>3</Boton>
    			<Boton agregar={agregarInput}>+</Boton>
    		</div>
    		<div className="fila">
    			<Boton agregar={agregarInput}>4</Boton>
    			<Boton agregar={agregarInput}>5</Boton>
    			<Boton agregar={agregarInput}>6</Boton>
    			<Boton agregar={agregarInput}>-</Boton>
    		</div>
    		<div className="fila">
    			<Boton agregar={agregarInput}>7</Boton>
    			<Boton agregar={agregarInput}>8</Boton>
    			<Boton agregar={agregarInput}>9</Boton>
    			<Boton agregar={agregarInput}>/</Boton>
    		</div>
    		<div className="fila">
    			<Boton agregar={agregarInput}>0</Boton>
    			<Boton agregar={agregarInput}>.</Boton>
    			<Boton  agregar={calcular}>=</Boton>
    			<Boton agregar={agregarInput}>*</Boton>
    		</div>
    		<div className="fila">
    			<Clear limpia={LimpiarInput}/>
    		</div>
    	</div>
    </div>
    
		)
}

export default Calculadora;