import { Component } from "react";
import CardCR from "../components/CardCR";

class Home extends Component {

    
    render(){    
        return (
            <div>
                <h1 style={{"padding-left":"30px", "padding-top":"30px"}}>Aulas Asignadas:</h1>
                <br />
                <CardCR />
            </div>
            
        );
    }
}

export default Home;