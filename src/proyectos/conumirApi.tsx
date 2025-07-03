import react,{useState,useEffect} from "react";
import "../css/clima.css"


interface photo{
	id:number,
	title:string,
	url:string,
	thumbnailUrl:string
}

 function ConsumirApi(){

    const [api,setApi]=useState<photo[]>([])
    const limit :number=20
    const [currentPage,setCurrentPage]=useState<number>(1)


    
      async function Api(){
         const resApi = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${currentPage}`)
         const res = await resApi.json()
         
         console.log(res)
         setApi(res)
         }
        
     useEffect(()=>{
        Api()
     },[currentPage])
  

 
	return(
		<div className="apis">
			<div style={{
  maxWidth: "900px",
  margin: "2rem auto",
  backgroundColor: "#f9f9f9",
  padding: "1.5rem",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  fontFamily: "Arial, sans-serif",
  color: "#333",
  lineHeight: "1.6"
}}>
  <h3 style={{ color: "#2c3e50", marginBottom: "1rem" }}>Proyecto: Consumo de API con Galería de Imágenes y paginacion</h3>
  <p>
    Este componente en React consume una API pública de fotos utilizando <strong>fetch</strong> y maneja el estado con <strong>useState</strong> y <strong>useEffect</strong>.
  </p>
  <ul style={{ paddingLeft: "1.2rem", marginTop: "0.5rem" }}>
    <li>Se muestran 20 imágenes por página usando <code>?_limit=20</code>.</li>
    <li>Se implementa una paginación básica para navegar entre páginas.</li>
    <li>El layout usa <strong>CSS Grid responsive</strong> con <code>auto-fit</code> y <code>minmax</code> para adaptarse a distintos tamaños de pantalla.</li>
    <li>El diseño incluye botones estilizados para mejorar la experiencia de usuario.</li>
  </ul>
  <p style={{ marginTop: "1rem" }}>
    Las imágenes se cargan dinámicamente desde <code>picsum.photos</code> usando el <strong>ID de cada imagen</strong> como semilla para obtener resultados únicos.
  </p>
</div>
			
			<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
        {api.map((photo) => (
          <div key={photo.id} style={{ textAlign: "center", border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
            <img src={`https://picsum.photos/seed/${photo.id}/150`} alt={photo.title}  />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
  <button
    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
    disabled={currentPage === 1}
    style={{
      padding: "0.5rem 1rem",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      opacity: currentPage === 1 ? 0.5 : 1
    }}
  >
    Anterior
  </button>
  <button
    onClick={() => setCurrentPage((p) => p + 1)}
    style={{
      padding: "0.5rem 1rem",
      backgroundColor: "#28a745",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer"
    }}
  >
    Siguiente
  </button>
</div>

		</div>

		)
}

export default ConsumirApi;