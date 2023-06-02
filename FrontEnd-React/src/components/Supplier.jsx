import React from "react";
import Select from "react-select";
import Cookies from "universal-cookie";
import axios from "axios";

const cookies = new Cookies();
const url = "https://intellidoorbackend-production.up.railway.app/classrooms";
let config = {
  headers: {
    Authorization: cookies.get("token"),
  },
};

const Supplier = () => {

    // axios
    //   .get(url, config)
    //   .then((response) => {
    //     return response.data;
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   });

  return (
    <div className="Supplier-container">
      <h1>Supplier</h1>
    </div>
  );
}

export default Supplier

