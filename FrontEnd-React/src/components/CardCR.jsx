import '../styles/CardCR.css';
import Cookies from "universal-cookie";
import axios, { Axios } from "axios";
import { useState } from 'react';

const cookies = new Cookies();
const url = "https://intellidoorbackend-production.up.railway.app/inuseclassrooms";
const url2 = "https://intellidoorbackend-production.up.railway.app/classrooms";
const url3 = "https://intellidoorbackend-production.up.railway.app/doors";

let config = {
    headers: {
        Authorization: cookies.get("token"),
    },
};

const CardCR = () => {
    const [time, setTime] = useState();
    const [crID, setCrid] = useState();
    const [aula, setAula] = useState();

    axios
        .get(url + "/" + cookies.get("id"), config)
        .then((response) => {
            return response.data;
        })
        .then((response) => {
            console.log(response);

            setCrid(response.crId);
            setTime(response.time);

        });

    axios
        .get(url2 + "/" + crID, config)
        .then((response) => {
            return response.data;
        })
        .then((response) => {
            console.log(response);
            setAula(response.num);

        });

        // Metodo abrir
        const abrirAula =()=>{
            axios
            .get(url3 + "/" + aula, config)
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
            .delete(url3 + "/" + aula, config)
            .then((response) => {
                return response.data;
            })
            .then((response) => {
                console.log(response);
    
            });
        }
    return (
        <div className="cardCR" class="container mt-3">
            <div class="card ">
                <div class="card-header">Aula: {aula}<br />Horario: {time}</div>
                <div class="card-body text-center">
                    <button type="button" className="btn_abrir" onClick={abrirAula} >Abrir Aula</button>
                    <button type="button" className="btn_cerrar" onClick={cerrarAula}>Cerrar Aula</button>
                </div>
            </div>
        </div>
    );
}
export default CardCR;