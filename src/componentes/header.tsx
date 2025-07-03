import {useModo} from "../context/modoOscuro"
import React,{useState,useEffect} from "react";
import { Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import "../app.css"


function Header(){

    //context
     const {modoDark,togleModoDark}=useModo()


    //abre menu responsive//
     const [menuOpen, setMenuOpen] = useState<boolean>(false);
  
   




	return(
	
		<div className={modoDark?"dark-mode":"light-mode"}>
		   <header className="header w-100 bg-white bg-opacity-10  p-3 shadow">
           
               <nav className="navbar">
                
                <h2  className="titulo">WEB DEVELOPER</h2>
              <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
              ☰
             </button>
                    
                    <ul style={{
                        background: "rgba(255, 255, 255, 0.1)", // Fondo semitransparente
                        backdropFilter: "blur(10px)", // Efecto de desenfoque
                        border: "2px solid rgba(255, 255, 255, 0.3)",
                        borderRadius:"50px" ,
                        padding:"4px"// Borde sutil
                        }} 
                   className={`nav-links ${menuOpen ? "open" : ""}`}>

                       <li><Link to="/about">sobre mi</Link></li>
                       <li><Link to="/contacto">contacto</Link></li>
                       <li><Link to="/proyectos">proyectos</Link></li>
                       <li><button  onClick={togleModoDark} className="botons">{!modoDark?<Sun size={25}/>:<Moon size={25}/>}</button></li>
                    </ul>
               </nav>
           </header>

     
          

  
       </div>
       

       
          
		)
}

export default Header;