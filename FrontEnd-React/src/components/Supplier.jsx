import React, { useEffect, useState } from "react";
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

  useEffect(()=>{
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
  },[])

  console.log(data)

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
      });
    })
  }

  return (
    <div className="Supplier-container">
      <Select options={ data } onChange={ handleSelectChange }/>
    </div>
  );
};

export default Supplier;
