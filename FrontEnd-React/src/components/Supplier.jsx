import React, { useState } from "react";
import Select from "react-select";
import Cookies from "universal-cookie";
import axios from "axios";

const cookies = new Cookies();
const url = "https://intellidoorbackend-production.up.railway.app/classrooms";
const url2 = "https://intellidoorbackend-production.up.railway.app/inuseclassrooms";
let config = {
  headers: {
    Authorization: cookies.get("token"),
  },
};

const Supplier = (props) => {

  const [data, setData] = useState([]);

  axios
    .get(url, config)
    .then((response) => {
      return response.data;
    })
    .then((response) => {
      const aux = [];
      response.forEach(element => {
        aux.push({
          label: `Aula ${element.num}`,
          value: `${element.id}`
        })
        setData(aux)
      });
    })

  const handleSelectChange = ( { value } ) => {
    const {dataSch, setDataSch} = props

    axios
    .get(url2, config)
    .then((response) => {
      return response.data;
    })
    .then((response) => {
      const aux = [];
      response.forEach(element => {
        if(element.crId == value){
          aux.push(element)
        }
        setDataSch(aux)
        dataSch.forEach(element => {
          console.log(element)
        })
      });
    })
  }

  return (
    <div className="Supplier-container">
      <Select options={ data } onChange={ handleSelectChange }/>
      {/* {data.map(item => <h1>{item.num}</h1>)} */}
    </div>
  );
};

export default Supplier;
