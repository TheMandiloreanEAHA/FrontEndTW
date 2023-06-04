import Schedule from "../components/Schedule";
import Supplier from "../components/Supplier";
import React, { useState } from "react";

const SolicitarAulas = () => {

    const [dataSchedule, setDataSchedule] = useState([]);
    const [classroom, setClassroom] = useState();

    return(
        <div>
            <h2>Solicitar aulas</h2>
            <Supplier setDataSch = {setDataSchedule} dataSch = {dataSchedule} setCr = {setClassroom}></Supplier>
            <Schedule dataSch = {dataSchedule} classroom = {classroom}></Schedule>
        </div>
    )

}

export default SolicitarAulas;