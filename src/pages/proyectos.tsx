import react from "react";
import {useModo} from "../context/modoOscuro"
import {useState} from "react";
import "../css/clima.css"
import Crud from "../proyectos/crud"
import ConsumirApi from "../proyectos/conumirApi"
import Calculadora from "../proyectos/calculadora"
import ProyectoAuthCard from "../proyectos/autentication"
import Tatu from "../proyectos/tatu"
import TomarFoto from "../proyectos/takephoto"




type climas = {
  name:string,
  temp:string,
  humidity:string,
  wind_speed:string
}


function Proyect(){

       const {modoDark,togleModoDark}=useModo()
          
       const [city,setCity]=useState<string>("")
       const [error,setError]=useState<string | null>(null)
       const [clima,setClima]=useState<climas|null>(null)

       const key :string="b8472dafc7106d7c43c2c5ac712b05c2"


       const change = async(e:React.FormEvent<HTMLFormElement>)=>{
             e.preventDefault();
             
            try{
              

          //busca la ciudad//
          const res = await fetch( `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${key}`)
          const response = await res.json()
          console.log(response)
          //si no la encuentra returna//
          if(!response){
             setError("ciudad no encontrada")
             return 
          }
          //desestruturo la latitud y longitu del la respuesta//
          const {lat,lon,name}=response[0]


          //ahora busco el clima//

          const weather = await fetch( `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`)
          console.log(weather)
          const weatheres = await weather.json()

        setClima({
        name:weatheres.name,
        temp: weatheres.main.temp,
        humidity: weatheres.main.humidity,
        wind_speed: weatheres.wind.speed
});


        setCity("")
          }catch(error){
           setError("no se encontro")
           setTimeout(()=>{
            setError(null)
           },4000)
          }
    }


      

      



	return(
    
		<div className={modoDark?"dark-mode":"light-mode"}>
			
    

    <div id="primer-proyecto" className=" container d-flex justify-content-center align-items-center mt-0 vh-100">
    <div className="container d-flex justify-content-center align-items-center vh-100">
  <div className="bg-light p-4 rounded shadow-sm">
    <p className="text-muted">
      En este proyecto, se está consumiendo la API de <strong className="text-primary">OpenWeather</strong>. 
      Con la cual estamos consultando la temperatura de las ciudades del mundo. Para este pequeño proyecto utilicé 
      <span className="badge bg-secondary ms-2">TypeScript</span>, 
      <span className="badge bg-info text-dark ms-2">Bootstrap</span>, 
      <span className="badge bg-warning text-dark ms-2">CSS</span>, 
      <span className="badge bg-success ms-2">React</span>, 
      <span className="badge bg-dark ms-2">Fetch</span> y 
      <span className="badge bg-primary ms-2">useState</span>.
    </p>
  </div>
</div>
    <div id="fondo" className="card shadow-lg p-4" style={{width: "100%"}} >
      <form className="w-100" onSubmit={change}>
        <div className="mb-3 w-80">
          <label htmlFor="nombre" className="form-label">Ciudad</label>
          <input value={city} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setCity(e.target.value)} type="text" className="form-control w-100" id="nombre" placeholder="nombre de ciudad" required/>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">Enviar</button>
        </div>
      </form>

       {error && <div className="alert alert-danger text-center">{error}</div>}
       
       
      {clima && (
        <div className="card w-75 mx-auto shadow">
          <div className="card-body text-center">
            <h5 className="card-title">{clima.name}</h5>
            <p className="card-text">🌡️ Temperatura: {clima.temp} °C</p>
            <p className="card-text">💧 Humedad: {clima.humidity}%</p>
            <p className="card-text">💨 Viento: {clima.wind_speed} m/s</p>
          </div>
        </div>
      )}




    </div>
  </div>

     

  {/*proyecto de un crud*/}


 <div className="crud-titulo">
   <p>🛠️<strong> Proyecto: CRUD Visual con React y TypeScript</strong></p>
<h4>Descripción del proyecto:</h4>

<p>Este proyecto es una interfaz CRUD (Crear, Leer, Actualizar y Eliminar) desarrollada con React, TypeScript y estilos personalizados en CSS. Permite al usuario agregar, editar y eliminar registros de manera dinámica sin necesidad de conectarse a una base de datos externa. Todo se maneja desde el estado interno de React.</p>

<h6>¿Qué hace este CRUD?</h6>

 <strong>Crear</strong>: Permite ingresar un nombre y una acción, y guardarlos como un nuevo registro.

 <strong>Leer</strong>: Muestra una tabla con todos los registros agregados.

<strong> Actualizar</strong>: Puedes editar cualquier registro existente desde la misma interfaz.

<strong> Eliminar</strong>: Puedes borrar un registro en cualquier momento.

<p>¿Cómo lo hice?

Utilicé React con Vite como entorno de desarrollo para lograr una aplicación rápida y modular.

Implementé TypeScript para asegurar el tipado fuerte y evitar errores en tiempo de desarrollo.

Manejé los datos con el hook useState, creando un arreglo de objetos para representar cada entrada.

La lógica para editar funciona identificando cada registro por un id único generado con Date.now().

El diseño es completamente responsive, adaptándose a pantallas móviles y de escritorio.

Apliqué CSS personalizado para lograr un estilo limpio, moderno y fácil de leer.
</p>

    < Crud/>
 </div>


   <ConsumirApi/>


  <div className="crud-titulo">
   
  <section className="proyecto">
  <h2> Calculadora React + TypeScript</h2>
  <p>
    Este proyecto consiste en una <strong>calculadora interactiva</strong> desarrollada con <strong>React y TypeScript</strong>, capaz de realizar operaciones matemáticas básicas (suma, resta, multiplicación, división y decimales). Es una aplicación práctica que demuestra la manipulación del estado, la composición de componentes y el manejo de expresiones con la librería <code>mathjs</code>.
  </p>

  <h3> Características principales:</h3>
  <ul>
    <li> <strong>React + TypeScript</strong>: código tipado, modular y mantenible.</li>
    <li> <strong>Operaciones matemáticas en tiempo real</strong> gracias a <code>mathjs</code>.</li>
    <li> <strong>Componentes reutilizables</strong>: botones (<code>Boton</code>), pantalla (<code>Pantaya</code>) y botón de limpieza (<code>Clear</code>).</li>
    <li> <strong>Diseño responsivo</strong> y personalizable con CSS.</li>
    <li> <strong>Validación simple</strong>: evita cálculos vacíos con alertas para el usuario.</li>
    <li> <strong>Estado global del input</strong> con <code>useState</code> que se actualiza dinámicamente al presionar los botones.</li>
  </ul>

  <h3> Tecnologías utilizadas:</h3>
  <ul>
    <li>React (con Vite)</li>
    <li>TypeScript</li>
    <li>MathJS (evaluación de expresiones)</li>
    <li>CSS personalizado</li>
  </ul>

  <h3> ¿Qué aprendí con este proyecto?</h3>
  <p>
    - Cómo dividir una UI en componentes reutilizables en React.<br />
    - Uso de eventos personalizados para construir una calculadora desde cero.<br />
    - Evaluar expresiones matemáticas de forma segura con <code>mathjs</code>.<br />
    - Aplicar lógica condicional y validación básica en formularios interactivos.
  </p>
</section>

     <Calculadora/>
 </div>
 <TomarFoto/> 

<ProyectoAuthCard/>

<Tatu/>

		</div>

    


    
		)
}

export default Proyect;