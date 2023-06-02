import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const url = "https://intellidoorbackend-production.up.railway.app/inuseclassrooms";
let config = {
  headers: {
      Authorization: cookies.get("token"),
  },
};
//cuack
const Schedule = (props) => {
  const [time, setTime] = useState();
  const { dataSch } = props;

  dataSch.forEach((element) => {
    switch (element.time) {
      case "7:00-9:00":
        document.getElementById("check1").disabled = true;
        document.getElementById("text1").style.color = "red"
      break
      case "9:00-11:00":
        document.getElementById("check2").disabled = true;
        document.getElementById("text2").style.color = "red"
      break
      case "11:00-13:00":
        document.getElementById("check3").disabled = true;
        document.getElementById("text3").style.color = "red"
      break
      case "13:00-15:00":
        document.getElementById("check4").disabled = true;
        document.getElementById("text4").style.color = "red"
      break
      case "15:00-17:00":
        document.getElementById("check5").disabled = true;
        document.getElementById("text5").style.color = "red"
      break
      case "17:00-19:00":
        document.getElementById("check6").disabled = true;
        document.getElementById("text6").style.color = "red"
      break
      case "19:00-21:00":
        document.getElementById("check7").disabled = true;
        document.getElementById("text7").style.color = "red"
      break
    }
  });

  const reservar = () => {
    const {crId} = dataSch[0]
    let auxCrId = crId
    let auxUserId = cookies.get("id")
    let auxTime = time
    const auxJson = { crId: auxCrId, userId: auxUserId, time: auxTime}
    axios
      .post(url, auxJson, config)
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (data) => {
    setTime(data)
  }

  return (
    <div className="Schedule-container">
      <h6 id="text1" >7:00-9:00</h6>
      <input type="checkbox" id="check1" onChange={()=>handleChange("7:00-9:00")}/>
      <br />
      <h6 id="text2">9:00-11:00</h6>
      <input type="checkbox" id="check2" onChange={()=>handleChange("9:00-11:00")}/>
      <br />
      <h6 id="text3">11:00-13:00</h6>
      <input type="checkbox" id="check3" onChange={()=>handleChange("11:00-13:00")}/>
      <br />
      <h6 id="text4">13:00-15:00</h6>
      <input type="checkbox" id="check4" onChange={()=>handleChange("13:00-15:00")}/>
      <br />
      <h6 id="text5">15:00-17:00</h6>
      <input type="checkbox" id="check5" onChange={()=>handleChange("15:00-17:00")}/>
      <br />
      <h6 id="text6">17:00-19:00</h6>
      <input type="checkbox" id="check6" onChange={()=>handleChange("17:00-19:00")}/>
      <br />
      <h6 id="text7">19:00-21:00</h6>
      <input type="checkbox" id="check7" onChange={()=>handleChange("19:00-21:00")}/>
      <br />
      <button onClick={reservar}>Reservar</button>
    </div>
  );
};

export default Schedule;
