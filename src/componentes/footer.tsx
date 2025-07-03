import react from "react";
import {useModo} from "../context/modoOscuro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


function Footer(){

       const {modoDark,togleModoDark}=useModo()
    


	return(
    
    <div  className={modoDark?"dark-mode":"light-mode"}>
   <footer className="text-light py-4 border-top border-light">
      <div className="container text-center">
        <div className="mb-3">
               <a href="https://github.com/hfrcmanizales" className="text-light me-3" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="3x" color="black" />
          </a>
        </div>
        
        

        <p id="pie" className="mb-0">&copy; {new Date().getFullYear()} Fernando. Todos los derechos reservados.</p>
        
        <div className="mt-3">
          <a href="#" id="arriba" className="btn btn-primary">Volver arriba</a>
        </div>
      </div>
    </footer>
  </div>
    


		)
}

export default Footer;