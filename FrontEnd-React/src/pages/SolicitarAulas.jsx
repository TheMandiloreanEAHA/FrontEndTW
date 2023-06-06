import Schedule from "../components/Schedule";
import Supplier from "../components/Supplier";
import React, { useState } from "react";
import "../styles/SolicitarAulas.css";

const SolicitarAulas = () => {
  const [dataSchedule, setDataSchedule] = useState([]);
  const [classroom, setClassroom] = useState();

  return (
    <div className="solicitar-container">
      <h1>Solicitar Aula</h1>
      <Supplier
        setDataSch={setDataSchedule}
        dataSch={dataSchedule}
        setCr={setClassroom}
      ></Supplier>
      <Schedule dataSch={dataSchedule} classroom={classroom}></Schedule>
    </div>
  );
};

export default SolicitarAulas;
