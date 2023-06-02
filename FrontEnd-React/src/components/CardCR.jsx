import '../styles/CardCR.css';
import Cookies from "universal-cookie";
import axios from "axios";

const cookies = new Cookies();
const url = "https://intellidoorbackend-production.up.railway.app/inuseclassrooms";
let config = {
   headers: {
    Authorization: cookies.get("token"),
   },
};



const CardCR = (aula, horario) => {
    return (
        <div className="cardCR" class="container mt-3">
            <div class="card ">
                <div class="card-header">Aula: <br />Horario: </div>
                <div class="card-body text-center">
                    <button type="button" className="btn_abrir">Abrir Aula</button>
                    <button type="button" className="btn_cerrar">Cerrar Aula</button>
                </div>
            </div>
        </div>
    );
}
export default CardCR;