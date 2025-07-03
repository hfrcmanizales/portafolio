import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../css/contenido.css"
import {useModo} from "../context/modoOscuro"








export default function Contenido() {

     const {modoDark,togleModoDark}=useModo()


  
  

 

  return (
    <>
    

    <div id="mensaje" className={modoDark?"dark-mode":"light-mode"}>
    <div className="welcome-container">
        <h1>Bienvenido a mi Portafolio</h1>
        <p>
          ¡Hola! Soy un desarrollador web full-stack con conocimientos en React, Node.js y MongoDB.
          Me encanta construir aplicaciones web. Actualmente, estoy
          aprendiendo TypeScript y mejorando mis habilidades.
        </p>
        <p>
          Disfruto poder crear y desarrollar.

        </p>
        <p>A continuacion podras ver unos sencillos proyectos, pero que me ayudaron a entender conceptos basicos de la programcion, me encanta aprender y seguir mejorando, espero poder darle un giro a mi vida profecional y poder adentrarme en este mundo de la programacion</p>
    </div>
    </div>
    
  
    </>
  );
}
