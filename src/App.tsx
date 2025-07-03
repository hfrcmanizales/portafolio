import './App.css'
import ModoOscuro from "./context/modoOscuro"
import Header from "./componentes/header"
import Contenido from "./componentes/contenido"
import Footer from "./componentes/footer"
import { Routes, Route } from "react-router-dom"
import  About from "./pages/sobremi";
import ContactForm from "./pages/contacto";
import Proyect from  "./pages/proyectos";



function App() {

  return (
    <> 

     <ModoOscuro>
     
        <Header/>
        <Contenido/>
        <Routes>
          <Route path="/about" element={ <About /> } />
          <Route path="/contacto" element={ <ContactForm /> } />
          <Route path="/proyectos" element={ <Proyect /> } />
        </Routes>
        <Footer/>
      
    </ModoOscuro> 
   </>
  )
}

export default App
