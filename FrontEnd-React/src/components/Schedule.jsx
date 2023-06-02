import React, { useState } from "react";
import axios from "axios";

const Schedule = (props) => {

  const { dataSch } = props
  const [c1, setC1] = useState(false);
  const [c2, setC2] = useState(false);
  const [c3, setC3] = useState(false);
  const [c4, setC4] = useState(false);
  const [c5, setC5] = useState(false);
  const [c6, setC6] = useState(false);
  const [c7, setC7] = useState(false);

  dataSch.forEach(element => {
    console.log(element)
  });
  
  return (
    <div className="Schedule-container">
      <h6 className="check1" value="7:00-9:00">7:00-9:00</h6><input type="checkbox" value={c1}/><br/>
      <h6 className="check2" value="9:00-11:00">9:00-11:00</h6><input type="checkbox" value={c2}/><br/>
      <h6 className="check3" value="11:00-13:00">11:00-13:00</h6><input type="checkbox" value={c3}/><br/>
      <h6 className="check4" value="13:00-15:00">13:00-15:00</h6><input type="checkbox" value={c4}/><br/>
      <h6 className="check5" value="15:00-17:00">15:00-17:00</h6><input type="checkbox" value={c5}/><br/>
      <h6 className="check6" value="17:00-19:00">17:00-19:00</h6><input type="checkbox" value={c6}/><br/>
      <h6 className="check7" value="19:00-21:00">19:00-21:00</h6><input type="checkbox" value={c7}/><br/>
      <button>Reservar</button>
    </div>
  );
}

export default Schedule;