import { NavLink } from 'react-router-dom'
import {
    FaBars,
    FaTh,
    FaMandalorian
} from "react-icons/fa"
import '../styles/SideBar.css'
import { useState } from 'react';
// se crea el componente side bar
const SideBar = () => {
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    //se crea un arreglo con los items que tendra el menu
    const menuItem =[
        {
            path:"/home",
            name:"Pagina Principal",
            icon: <FaMandalorian/>
        },  
        {
            path:"/home/solicitarAulas",
            name:"Solicitar Aula",
            icon: <FaTh/>
        },
    ]
    //se coloca el titulo y la opción de ampliar el side bar
    //se itera entre los elemento y por cada uno se coloca el icono, se establece el path al que redirige
    return (
        <div className="contenedor">
            <div style= {{width: isOpen ? "264px":"56px"}} className="sidebar">
                <div className="top_section">
                    <h1 style= {{display: isOpen ? "block":"none"}} className="logo">Horarios de Aulas FEI</h1>
                    <div style= {{marginLeft: isOpen ? "50px":"0px"}} className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link">
                            <div className="icon">{item.icon}</div>
                            <div style= {{display: isOpen ? "block":"none"}} className="nav-link"><p style={{fontFamily: "sans-serif", fontSize: "1.2em"}}>{item.name}</p></div>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default SideBar;