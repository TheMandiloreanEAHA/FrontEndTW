import Schedule from "../components/Schedule";
import Supplier from "../components/Supplier";
import React, { useState } from "react";

const SolicitarAulas = () => {

    const [dataSchedule, setDataSchedule] = useState([]);

    return(
        <div>
            <h2>Solicitar aulas</h2>
            <Supplier setDataSch = {setDataSchedule} dataSch = {dataSchedule}></Supplier>
            <Schedule dataSch = {dataSchedule}></Schedule>
        </div>
    )

}

export default SolicitarAulas;