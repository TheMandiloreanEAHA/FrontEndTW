import '../styles/NavBar.css';
import { Component } from 'react';
import Logo from '../imgs/uv.png';
import Cookies from "universal-cookie";

const cookies = new Cookies();

class NavBar extends Component {
    //metodo para cerrar sesión que te devuelve al login
    cerrarSesion=()=>{
        window.location.href="/";
    }
    //se renderiza la nav bar la cual contiene el logo, el nombre del usuario logueado y el botón para cerrar sesión
    render(){
        return (
            <div className="contenedorNav">
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={Logo} alt="logo" width="50" height="50" />
                        </a>
                        <a className="navbar-brand">Bienvenido {cookies.get("name")}</a>
                        <button className="btn btn-danger my-2 my-sm-0" type="submit" onClick={()=>this.cerrarSesion()}>Cerrar sesión</button>
                    </div>
                </nav>
            </div>
        );
    }
};

export default NavBar;