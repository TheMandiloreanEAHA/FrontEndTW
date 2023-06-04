import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { newRegistro } from "./SupplierRestSoap";
import "../styles/Schedule.css";

const cookies = new Cookies();
const url =
  "https://intellidoorbackend-production.up.railway.app/inuseclassrooms";

let config = {
  headers: {
    Authorization: cookies.get("token"),
  },
};

const Schedule = (props) => {
  const [time, setTime] = useState();
  const { dataSch, classroom } = props;

  dataSch.forEach((element) => {
    switch (element.time) {
      case "7:00-9:00":
        document.getElementById("check1").disabled = true;
        document.getElementById("text1").style.color = "red";
        break;
      case "9:00-11:00":
        document.getElementById("check2").disabled = true;
        document.getElementById("text2").style.color = "red";
        break;
      case "11:00-13:00":
        document.getElementById("check3").disabled = true;
        document.getElementById("text3").style.color = "red";
        break;
      case "13:00-15:00":
        document.getElementById("check4").disabled = true;
        document.getElementById("text4").style.color = "red";
        break;
      case "15:00-17:00":
        document.getElementById("check5").disabled = true;
        document.getElementById("text5").style.color = "red";
        break;
      case "17:00-19:00":
        document.getElementById("check6").disabled = true;
        document.getElementById("text6").style.color = "red";
        break;
      case "19:00-21:00":
        document.getElementById("check7").disabled = true;
        document.getElementById("text7").style.color = "red";
        break;
    }
  });

  const getDate = () => {
    var today = new Date();
    var now = today.toLocaleDateString("es-MX");
    return now;
  };

  const refrescar = () => {
    location.reload()
  }

  const reservar = async () => {
    let auxCrNum = classroom.crNum;
    let auxCrId = classroom.crId;
    let auxUserId = cookies.get("id");
    let auxTime = time;
    let auxNombre = cookies.get("name");
    const auxJson = { crId: auxCrId, userId: auxUserId, time: auxTime };

    await axios
      .post(url, auxJson, config)
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        const rows = response.affectedRows;
        if (rows == 1) {
          console.log(auxCrNum);
          console.log(auxNombre);
          console.log(getDate());
          console.log(time);
          //
          newRegistro(auxCrNum, auxNombre, getDate(), time);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (data) => {
    setTime(data);
  };

  return (
    <div className="schedule-container">
      <h5>Horarios:</h5>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>
              <h6 id="text1">7:00-9:00</h6>
            </th>
            <th>
              <h6 id="text2">9:00-11:00</h6>
            </th>
            <th>
              <h6 id="text3">11:00-13:00</h6>
            </th>
            <th>
              <h6 id="text4">13:00-15:00</h6>
            </th>
            <th>
              <h6 id="text5">15:00-17:00</h6>
            </th>
            <th>
              <h6 id="text6">17:00-19:00</h6>
            </th>
            <th>
              <h6 id="text7">19:00-21:00</h6>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <input
                type="checkbox"
                id="check1"
                onChange={() => handleChange("7:00-9:00")}
              />
            </th>
            <th>
              <input
                type="checkbox"
                id="check2"
                onChange={() => handleChange("9:00-11:00")}
              />
            </th>
            <th>
              <input
                type="checkbox"
                id="check3"
                onChange={() => handleChange("11:00-13:00")}
              />
            </th>
            <th>
              <input
                type="checkbox"
                id="check4"
                onChange={() => handleChange("13:00-15:00")}
              />
            </th>
            <th>
              <input
                type="checkbox"
                id="check5"
                onChange={() => handleChange("15:00-17:00")}
              />
            </th>
            <th>
              <input
                type="checkbox"
                id="check6"
                onChange={() => handleChange("17:00-19:00")}
              />
            </th>
            <th>
              <input
                type="checkbox"
                id="check7"
                onChange={() => handleChange("19:00-21:00")}
              />
            </th>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-primary btn-lg" onClick={reservar} data-bs-toggle="modal" data-bs-target="#exampleModal">
        Reservar
      </button>

      {/* model */}
      <div class="modal" id="exampleModal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Aula reservada con éxito</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={refrescar}>
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
