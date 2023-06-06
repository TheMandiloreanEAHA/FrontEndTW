import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from "universal-cookie";


const Usuarios = () => { 

    const cookies = new Cookies();
    const [usuarios, setUsuarios] = useState([]);
    const API_URL = "https://intellidoorbackend-production.up.railway.app/users"

    let config = {
      headers: {
        Authorization: cookies.get("token"),
      },
    };

    const listaUsuarios = async () =>{
        await axios
        .get(API_URL, config)
        .then((response) => {
        return response.data;
        })
        .then((response) => {
            setUsuarios(response);
        })
        .catch((error) => {
        console.log(error);
        });
    };

    useEffect(() => {
        listaUsuarios();
    });

    const postUsuario = async (nombre,email,password,admin) =>{
        const json ={
            name: nombre,
            email: email,
            password: password,
            admin: admin
        }
        await axios
        .post(API_URL,json, config)
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

    const deleteUsuario = async (id) =>{
        const aux = API_URL+`/${id}`
        await axios
        .delete(aux, config)
        .then((response) => {
        console.log('Usuario eliminado');
        return response.data;
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
        console.log(error);
        });


    };
    // -------------MODAL--------------------------------
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [admin, setAdmin] = useState(false);

    const guardarUsuario = () => {
      postUsuario(nombre, email, password, admin);
      console.log("Usuario guardado");
      closeModal();
    };

    const closeModal = () => {
      setNombre("");
      setEmail("");
      setPassword("");
      setAdmin(false);
    };

    return (
      <>
        <div className="container">
          <h1>Usuarios</h1>
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
                <th>Nombre</th>
                <th>Email</th>
                <th>Admin</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.admin}</td>
                        <td><button className="btn btn-danger" 
                        onClick={() => deleteUsuario(item.id)}
                            data-bs-toggle="modal2"
                            data-bs-target="#modal2">
                            Eliminar
                        </button></td>
                    </tr>
                    ))}
            </tbody>
          </table>
        </div>

        {/* modal de agregar usuario */}
        <div className="modal fade" id="modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Agregar Usuario</h4>
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
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group form-check d-flex align-items-center">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="admin"
                      checked={admin}
                      onChange={(e) => setAdmin(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="admin">
                      Admin
                    </label>
                  </div>
                </form>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={guardarUsuario}
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
}

export default Usuarios;