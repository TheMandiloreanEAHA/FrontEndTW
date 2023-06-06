import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const SalonesEnUso = () => {
  const cookies = new Cookies();
  const [salones, setSalones] = useState([]);
  const API_URL =
    "https://intellidoorbackend-production.up.railway.app/inuseclassrooms";

  let config = {
    headers: {
      Authorization: cookies.get("token"),
    },
  };

  const listaSalones = async () => {
    await axios
      .get(API_URL, config)
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        setSalones(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    listaSalones();
  });

  return (
    <>
      <div className="container">
        <h1>Reservaciones actuales</h1>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>ID Aula</th>
              <th>ID Usuario</th>
              <th>Hora</th>
            </tr>
          </thead>
          <tbody>
            {salones.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.crId}</td>
                <td>{item.userId}</td>
                <td>{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default SalonesEnUso;
