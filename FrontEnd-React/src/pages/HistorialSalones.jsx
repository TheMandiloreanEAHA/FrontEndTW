import React, { useEffect, useState } from 'react';
import { getAllRegistros } from "./server"

const HistorialSalones = () => {
  
  const [registros, setRegistros] = useState([]);

    const listaRegistros = async () =>{
        try{
            const data = await (await getAllRegistros()).json();
            setRegistros(data.data);
        }catch(error){
            console.log(error);
        }
    };

    useEffect(() => {
        listaRegistros();
        // eslint-disable-next-line
    });

  return (
    <div className="container">
      <h1>Tabla de Datos</h1>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Aula</th>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Hora</th>
          </tr>
        </thead>
        <tbody>
          {registros.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.aula}</td>
              <td>{item.nombre}</td>
              <td>{item.fecha}</td>
              <td>{item.hora}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistorialSalones;
