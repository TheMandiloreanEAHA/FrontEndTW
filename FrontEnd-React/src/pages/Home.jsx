import { Component } from "react";
import Cookies from "universal-cookie";
import axios from 'axios';

// const cookies = new Cookies();

class Home extends Component {

    

    render(){
        // console.log("id: "+cookies.get("id"));
        // console.log("nombre: "+cookies.get("nombre"));
        // console.log("apellidos: "+cookies.get("apellidos"));
        // console.log("username: "+cookies.get("username"));
    
        return (
            <div>
                <h1>HOME</h1>
                <br />
            </div>
            
        );
    }
}

export default Home;