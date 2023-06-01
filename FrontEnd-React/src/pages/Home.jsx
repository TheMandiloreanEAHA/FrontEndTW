import { Component } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Home extends Component { 
    cerrarSesion=()=>{
        cookies.remove("id", {path:"/"});
        cookies.remove("nombre", {path:"/"});
        cookies.remove("apellidos", {path:"/"});
        cookies.remove("username", {path:"/"});
        window.location.href="./";
    }

    componentDidMount(){
        if (!cookies.get("username")) {
            window.location.href="./";
        }
    }

    render(){
        console.log("id: "+cookies.get("id"));
        console.log("nombre: "+cookies.get("nombre"));
        console.log("apellidos: "+cookies.get("apellidos"));
        console.log("username: "+cookies.get("username"));
    
        return (
            <div>
                <h1>HOME</h1>
                <br />
                <button onClick={()=>this.cerrarSesion()}>Cerrar Sesión</button>
            </div>
            
        );
    }
 }
 export default Home;