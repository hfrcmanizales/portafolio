import React, { useState } from "react";
import "../css/clima.css";

interface Cruds {
  name: string;
  text: string;
  id: number;
}

function Crud() {
  const [dato, setDato] = useState<Cruds>({ name: "", text: "", id: 0 });
  const [datos, setDatos] = useState<Cruds[]>([]);
  const [datosNuevos, setDatosNuevos] = useState<Cruds>({ name: "", text: "", id: 0 });
  const [abrir, setAbrir] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDato((prev) => ({
      ...prev,
      id: Date.now(),
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDatos((state) => [...state, dato]);
    setDato({ name: "", text: "", id: 0 });
  };

  const eliminar = (id: number) => {
    setDatos((prev) => prev.filter((item) => item.id !== id));
  };

  const buscar = (id: number) => {
    const encontrado = datos.find((item) => item.id === id);
    if (encontrado) {
      setDatosNuevos(encontrado);
      setAbrir(true);
    }
  };

  const handleEditar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDatosNuevos((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitEditar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const actualizados = datos.map((item) =>
      item.id === datosNuevos.id ? { ...item, name: datosNuevos.name, text: datosNuevos.text } : item
    );
    setDatos(actualizados);
    setAbrir(false);
  };

  return (
    <div className="container-crud">
      <h2 className="crud-h2">CRUD Visual</h2>

      <form className="crud-form" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={dato.name}
          name="name"
          type="text"
          placeholder="Nombre"
          required
        />
        <input
          onChange={handleChange}
          value={dato.text}
          name="text"
          type="text"
          placeholder="Acción"
          required
        />
        <button type="submit">Agregar</button>
      </form>

      <div className="table-responsive">
        <table className="crud-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Acción</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {datos.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.text}</td>
                <td>
                  <button className="edit-btn" onClick={() => buscar(item.id)}>Editar</button>
                  <button className="delete-btn" onClick={() => eliminar(item.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {abrir && (
        <form className="crud-form" onSubmit={submitEditar}>
          <input
            onChange={handleEditar}
            value={datosNuevos.name}
            name="name"
            type="text"
            placeholder="Nombre"
            required
          />
          <input
            onChange={handleEditar}
            value={datosNuevos.text}
            name="text"
            type="text"
            placeholder="Acción"
            required
          />
          <button type="submit">Guardar Cambios</button>
        </form>
      )}
    </div>
  );
}

export default Crud;
