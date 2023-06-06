import React, { useEffect, useState } from "react";
import { getAllRegistros } from "../components/SupplierRestSoap";
//se crea el componente de nuestra página de historial de salones
const HistorialSalones = () => {
  const [registros, setRegistros] = useState([]);
  //metodo que hace la llamada GET al API SOAP
  const listaRegistros = async () => {
    try {
      //guardamos el resultado en una constante
      const data = await (await getAllRegistros()).json();
      //dichos registros se setean en el state
      setRegistros(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listaRegistros();
  });
  //se crea una tabla, con sus headers, posteriormente se itera en el registro para meterlos en el body de la tabla
  return (
    <div className="container">
      <h1>Historial</h1>
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
