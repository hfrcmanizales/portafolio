import react from "react";
import "../css/pages.css"
import {useModo} from "../context/modoOscuro"
import nuevo from "../assets/nuevo.jpg"
function About(){


	       const {modoDark,togleModoDark}=useModo()

	return(
		

      

        <div className={modoDark?"dark-mode":"light-mode"}>
		
		  <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card p-4 shadow-lg rounded-4">
            <div className="card-body">
              <div style={{width:"200px",height:"200px",margin:"auto"}}>
                 <img src={nuevo} alt="nuevo" className="card-image" />
              </div>
              <p className="mt-5">
                ¡Hola! Soy <strong>FERNANDO RESTREPO</strong>. <strong>Tecnico en sistemas y desarrollador full-stack.</strong><br/>
             
                Apasionado por la creación de aplicaciones web eficientes y escalables. Me especializo en
                <strong> React, Javascript, Node.js, Express y MongoDB</strong>, y actualmente sigo perfeccionando mis habilidades en
                <strong> TypeScript</strong> para generar un codigo más robusto.
              </p>

              <p>
                Desde que comencé en el mundo del desarrollo web, me ha fascinado la combinación de diseño y
                funcionalidad, buscando siempre mejorar la experiencia del usuario con interfaces atractivas y
                un backend bien optimizado.
              </p>
              <h4 className="mt-4"> Tecnologías que manejo</h4>
              <ul>
                <li><strong>Frontend:</strong> Javascript, Html, Ccs, React, TypeScript, Bootstrap</li>
                <li><strong>Backend:</strong> Node.js,Express, MongoDB</li>
                <li><strong>Herramientas:</strong> Git,GitHub</li>
              </ul>
                
              <h4 className="mt-4"> Qué busco</h4>
              <p>
                Estoy en constante aprendizaje y en busca de nuevas oportunidades para seguir creciendo como
                desarrollador. Me interesa formar parte de proyectos innovadores donde pueda aportar mis
                conocimientos y seguir aprendiendo de otros profesionales.
              </p>
              <p className="text-center">
                
                 <strong>¿Hablamos?</strong>Escríbeme a <strong>fernandorestrepo@hotmail.es</strong><br/>
                o visita mi githube <a href="https://github.com/hfrcmanizales" target="_blank" rel="noopener noreferrer">Githube</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>



  
      </div>
		)
}

export default  About;