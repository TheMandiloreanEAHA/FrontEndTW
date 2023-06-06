import '../styles/CardCR.css';
import Cookies from "universal-cookie";
import axios from "axios";
import { useState, useEffect } from 'react';

const cookies = new Cookies();

const url = "https://intellidoorbackend-production.up.railway.app/classrooms";
const url2 = "https://intellidoorbackend-production.up.railway.app/doors";
//se crea el header que se mandara para la comprobación de la autenticación
let config = {
    headers: {
        Authorization: cookies.get("token"),
    },
};

const CardCR = (props) => {
    const [aula, setAula] = useState();
    const crId = props.crId
    const time = props.rTime
    //se hace un GET a la ruta classrooms enviando el ID del aula para saber que numero de aula es
    useEffect(() => {
        axios
        .get(url + "/" + crId, config)
        .then((response) => {
            return response.data;
        })
        .then((response) => {
            //el numero de aula se guarda en un statement porque se utiliza posteriormente
            setAula(response.num);
        });
    },[]);

    // Este metodo hace la petición al recurso doors para abrir la puerta indicada
    const abrirAula =()=>{
        //se manda el ID del aula y los headers de autenticación
        axios
        .get(url2 + "/" + aula, config)
        .then((response) => {
            return response.data;
        })
        .then((response) => {
            console.log(response);
        });
    }

    // Este metodo hace la petición al recurso doors para cerrar la puerta indicada
    const cerrarAula =()=>{
        //se manda el ID del aula y los headers de autenticación
        axios
        .delete(url2 + "/" + aula, config)
        .then((response) => {
            return response.data;
        })
        .then((response) => {
            console.log(response);
        });
    }
    //se crea un nuevo div para cada tarjeta
    return (
        <div className="cardCR container mb-4">
            <div className="card ">
                {/* en el header de la tarjeta se coloca el aula y el horario */}
                <div className="card-header">Aula: {aula}<br/>Horario: {time}</div>
                {/* en el body se colocan los botones para abrir y cerrar el aula */}
                <div className="card-body" class="text-center">
                    <button type="button" class="btn btn-success btn-lg m-4" onClick={abrirAula} >Abrir Aula</button>
                    <button type="button" class="btn btn-danger btn-lg m-4" onClick={cerrarAula}>Cerrar Aula</button>
                </div>
            </div>
        </div>
    );
}
export default CardCR;