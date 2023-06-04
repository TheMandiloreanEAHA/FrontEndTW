import { Component } from "react";
// import Cookies from "universal-cookie";
import '../styles/HomeAdmin.css';

// const cookies = new Cookies();

class HomeAdmin extends Component { 
    // componentDidMount(){
    //     if (!cookies.get("username")) {
    //         window.location.href="./";
    //     }
    // }

    render(){
        // console.log("id: "+cookies.get("id"));
        // console.log("nombre: "+cookies.get("nombre"));
        // console.log("apellidos: "+cookies.get("apellidos"));
        // console.log("username: "+cookies.get("username"));
    
        return (
            <h1>Hola Admin</h1>
            
        );
    }
}
export default HomeAdmin;