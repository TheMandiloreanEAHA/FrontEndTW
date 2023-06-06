import React, { useEffect, useState } from "react";
import Select from "react-select";
import Cookies from "universal-cookie";
import axios from "axios";
import '../styles/Supplier.css'

const cookies = new Cookies();
const url = "https://intellidoorbackend-production.up.railway.app/classrooms";
const url2 = "https://intellidoorbackend-production.up.railway.app/inuseclassrooms";
//header para mandar el token
let config = {
  headers: {
    Authorization: cookies.get("token"),
  },
};
//componente de supplier es el select, recibe props del padre
const Supplier = (props) => {

  const [data, setData] = useState([]);
  //se realiza un get de las aulas para pintarlas en el select
  useEffect(()=>{
    axios
    .get(url, config)
    .then((response) => {
      return response.data;
    })
    .then((response) => {
      const aux = [];
      //por cada salon lo mete en un arreglo con el formato necesario para que lo lea el select(combobox)
      response.forEach(element => {
        aux.push({
          label: `${element.num}`,
          value: `${element.id}`
        })
      });
      setData(aux)
    })
  },[])
  //cuando un elemento es seleccionado del select se llama este metodo 
  const handleSelectChange = ( { value, label } ) => {
    const {dataSch, setDataSch, setCr} = props
    const id = value
    const num = label 
    //hacemos un get al recurso de los salones en uso
    axios
    .get(url2, config)
    .then((response) => {
      console.log(response)
      return response.data;
    })
    .then((response) => {
      const aux = [];
      //si el ID del aula de la tupla es igual al valor seleccionado en el select se mete al arreglo
      response.forEach(element => {
        if(element.crId == value){
          aux.push(element)
        }
      });
      setDataSch(aux)
      setCr({crId:id, crNum:num})
    })
  }
  //aquí se pinta el select se hace una opción por cada elemento del arreglo y se le agrega su listener
  return (
    <div className="supplier-container">
      <h5>Aulas:</h5>
      <Select options={ data } onChange={ handleSelectChange }/>
    </div>
  );
};

export default Supplier;
