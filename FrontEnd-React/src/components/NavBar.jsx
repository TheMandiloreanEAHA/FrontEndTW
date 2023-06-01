import '../styles/NavBar.css';
// import Cookies from "universal-cookie";
import { Component } from 'react';
import Logo from '../imgs/feiLogo.png';

// const cookies = new Cookies();

class NavBar extends Component {
    cerrarSesion=()=>{
        // cookies.remove("id", {path:"/"});
        // cookies.remove("nombre", {path:"/"});
        // cookies.remove("apellidos", {path:"/"});
        // cookies.remove("username", {path:"/"});
        window.location.href="/";
    }

    // componentDidMount(){
    //     if (!cookies.get("username")) {
    //         window.location.href="./";
    //     }
    // }

    render(){
        return (
            <div className="contenedorNav">
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            {/* <img src="" class="rounded-pill"/> */}
                            <img src={Logo} alt="logo" width="50" height="50" />
                        </a>
                        <span class="navbar-text">Bienvenido</span>
                        <button class="btn btn-outline-danger my-2 my-sm-0" type="submit" onClick={()=>this.cerrarSesion()}>Cerrar sesión</button>
                    </div>
                </nav>
            </div>
        );
    }
};

export default NavBar;