import '../styles/CardCR.css';
import Cookies from "universal-cookie";
import axios from "axios";
import { useState, useEffect } from 'react';

const cookies = new Cookies();

const url = "https://intellidoorbackend-production.up.railway.app/classrooms";
const url2 = "https://intellidoorbackend-production.up.railway.app/doors";

let config = {
    headers: {
        Authorization: cookies.get("token"),
    },
};

const CardCR = (props) => {
    const [aula, setAula] = useState();
    const crId = props.crId
    const time = props.rTime

    useEffect(() => {
        axios
        .get(url + "/" + crId, config)
        .then((response) => {
            return response.data;
        })
        .then((response) => {
            setAula(response.num);
        });
    },[]);

    // Metodo abrir
    const abrirAula =()=>{
        axios
        .get(url2 + "/" + aula, config)
        .then((response) => {
            return response.data;
        })
        .then((response) => {
            console.log(response);
        });
    }

    // Metodo Cerrar
    const cerrarAula =()=>{
        axios
        .delete(url2 + "/" + aula, config)
        .then((response) => {
            return response.data;
        })
        .then((response) => {
            console.log(response);
        });
    }

    return (
        <div className="cardCR container mb-4">
            <div className="card ">
                <div className="card-header">Aula: {aula}<br/>Horario: {time}</div>
                <div className="card-body" class="text-center">
                    <button type="button" class="btn btn-success btn-lg m-4" onClick={abrirAula} >Abrir Aula</button>
                    <button type="button" class="btn btn-danger btn-lg m-4" onClick={cerrarAula}>Cerrar Aula</button>
                </div>
            </div>
        </div>
    );
}
export default CardCR;