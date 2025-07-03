import react from "react";
import {useState} from  "react"
import "../css/contenido.css"
import {useModo} from "../context/modoOscuro"
import axios from "axios";



interface FormData {
  name: string;
  email: string;
  message: string;
}

function ContactForm(){


    const {modoDark,togleModoDark}=useModo()



  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://envia-correo-production.up.railway.app/envia",formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
       
        if (response.status === 200) {
        setResponseMessage('Mensaje enviado correctamente.');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error: any) {
      if (error.response) {
        setResponseMessage(`Error del servidor: ${error.response.data.message}`);
      } else {
        setResponseMessage('Error de red al enviar el mensaje.');
      }
    }

      
    
  };

  return (
   <div id="pies" className={modoDark?"dark-mode":"light-mode"}>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 shadow-md rounded ">
      <h2 className="text-xl font-semibold  mb-4">Contáctanos</h2>

      <label className="block mb-2">
        Nombre:
        <input
          type="text"
          name="name"
          placeholder="ingrese name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border p-2 mt-1 rounded"
        />
      </label>

      <label className="block mb-2">
        Email:
        <input
          type="email"
          name="email"
          placeholder="ingrese email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border p-2 mt-1 rounded"
        />
      </label>

      <label className="block mb-4">
        Mensaje:
        <textarea
          name="message"
          placeholder="ingrese message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full border p-2 mt-1 rounded"
        />
      </label>

      <button type="submit" className="bg-blue-500  px-4 py-2 rounded hover:bg-blue-600">
        Enviar
      </button>

      {responseMessage && (
        <p className="mt-4 text-sm text-center">{responseMessage}</p>
      )}
    </form>
    </div>
  );
};

export default ContactForm;






 




	