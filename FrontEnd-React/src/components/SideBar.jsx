import { NavLink } from 'react-router-dom'
import {
    FaBars,
    FaTh,
    FaUserAlt,
    FaMandalorian
} from "react-icons/fa"
import '../styles/SideBar.css'
import { useState } from 'react';

const SideBar = () => {
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
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
        {
            path:"/home/perfil",
            name:"Perfil",
            icon: <FaUserAlt/>
        },
    ]
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