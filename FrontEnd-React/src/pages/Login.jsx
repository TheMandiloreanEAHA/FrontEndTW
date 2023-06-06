import { Component } from "react";
import "../styles/Login.css";
import axios from "axios";
import Cookies from "universal-cookie";
import jwtDecode from "jwt-decode";

const baseUrl = "https://intellidoorbackend-production.up.railway.app/login";
const cookies = new Cookies();

class Login extends Component {
  state = {
    form: {
      email: "",
      password: "",
    },
  };
  handleChange = async (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  iniciarSesion = async () => {
    let email = this.state.form.email;
    let pwsd = this.state.form.password;

    await axios
      .post(baseUrl, { email: email, password: pwsd })
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        console.log(response);
        if (response.length > 0) {
          const { token } = response[0];
          const decode = jwtDecode(token);
          if (decode.admin == 1) {
            window.location.href = "./homeAdmin";
          } else {
            window.location.href = "./home";
          }
          console.log(decode);
          cookies.set("token", token, { path: "/" });
          cookies.set("admin", decode.admin, { path: "/" });
          cookies.set("id", decode.id, { path: "/" });
          cookies.set("email", decode.email, { path: "/" });
          cookies.set("name", decode.name, { path: "/" });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="containerPrincipal">
        <div className="containerSecundario">
          <div className="form-group">
            <label>Usuario: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={this.handleChange}
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
            <br />
            <button
              className="btn btn-primary"
              onClick={() => this.iniciarSesion()}
            >
              Iniciar sesión
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
