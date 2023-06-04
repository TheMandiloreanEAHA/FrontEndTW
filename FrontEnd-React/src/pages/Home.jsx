import { useEffect, useState } from "react";
import CardCR from "../components/CardCR";
import Cookies from "universal-cookie";
import axios from "axios";
import '../styles/Home.css'

const cookies = new Cookies();
const url = "https://intellidoorbackend-production.up.railway.app/inuseclassrooms";
let config = {
  headers: {
    Authorization: cookies.get("token"),
  },
};

const Home = () => {
  const [reservas, setReservas] = useState([]);
  const userId = cookies.get("id");

  useEffect(() => {
    axios
      .get(url + `/${userId}`, config)
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        console.log(response)
        setReservas(response)
      });
  },[]);

  return (
    <div className="home-container">
      <h1>Aulas reservadas:</h1>
      <br/>
        {reservas.map((item)=>(<CardCR crId={item.crId} rTime={item.time} key={item.id}/>))}
    </div>
  );
};

export default Home;
