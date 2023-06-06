import { useEffect, useState } from "react";
import CardCR from "../components/CardCR";
import Cookies from "universal-cookie";
import axios from "axios";
import '../styles/Home.css'

const cookies = new Cookies();
const url = "https://intellidoorbackend-production.up.railway.app/inuseclassrooms";
//headers para enviar el token en la solicitud
let config = {
  headers: {
    Authorization: cookies.get("token"),
  },
};
//se crea el componente de la página home del usuario normal
const Home = () => {
  const [reservas, setReservas] = useState([]);
  const userId = cookies.get("id");
  //se realiza un GET del recurso inuseclassroom y se le envia el ID del usuario para que regrese las reservas especificas de dicho usuario
  useEffect(() => {
    axios
      .get(url + `/${userId}`, config)
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        console.log(response)
        //se guarda en un state
        setReservas(response)
      });
  },[]);
  //por cada uno de los elementos del arreglo se crea un componente card y se le envian los props necesarios
  return (
    <div className="home-container">
      <h1>Aulas reservadas:</h1>
      <br/>
        {reservas.map((item)=>(<CardCR crId={item.crId} rTime={item.time} key={item.id}/>))}
    </div>
  );
};

export default Home;
