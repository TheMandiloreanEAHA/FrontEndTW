import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const Salones = () => {
  const cookies = new Cookies();
  const [salones, setSalones] = useState([]);
  const API_URL =
    "https://intellidoorbackend-production.up.railway.app/classrooms";

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

  const postSalon = async (num) => {
    const json = {
      num: num,
    };

    console.log(json);
    await axios
      .post(API_URL, json, config)
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //---------------------MODAL--------------------
  const [numSalon, setNumSalon] = useState("");

  const guardarSalon = () => {
    postSalon(numSalon);
    console.log("Salon guardado");
    closeModal();
  };
  const closeModal = () => {
    setNumSalon("");
  };

  const deleteSalon = async (id) => {
    const aux = API_URL + `/${id}`;

    await axios
      .delete(aux, config)
      .then((response) => {
        console.log("Usuario eliminado");
        return response.data;
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container">
        <h1>Aulas</h1>
      </div>
      <div className="container">
        <button
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#modal"
        >
          <i className="bi bi-plus"></i> Agregar
        </button>
        <br></br>

        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Aula</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {salones.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.num}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteSalon(item.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* modal agregar */}

      <div className="modal fade" id="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Agregar Salon</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={closeModal}
                data-bs-dismiss="modal"
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="numero">Numero del aula:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="numSalon"
                    value={numSalon}
                    onChange={(e) => setNumSalon(e.target.value)}
                  />
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={guardarSalon}
                data-bs-dismiss="modal"
              >
                Aceptar
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={closeModal}
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Salones;
