import { NavLink } from 'react-router-dom'
import {
    FaBars,
    FaTh,
    FaUserAlt,
    FaMandalorian,
    FaBuromobelexperte,
    FaRegListAlt
} from "react-icons/fa"
import '../styles/SideBar.css'
import { useState } from 'react';
//se crea el componente del side bar del administrador
const SideBarAdmin = () => {
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    //se crea un arreglo con los items de la side bar
    const menuItem =[ 
        {
            path:"/homeAdmin/usuarios",
            name:"Gestionar Usuarios",
            icon: <FaUserAlt/>
        },
        {
            path:"/homeAdmin/salones",
            name:"Gestionar Salones",
            icon: <FaTh />
        },
        {
            path:"/homeAdmin/salonesUsados",
            name:"Salones en uso",
            icon: <FaBuromobelexperte />
        },  
        {
            path:"/homeAdmin",
            name:"Historial de salones",
            icon: <FaRegListAlt />
        },
    ]
    //se coloca el titulo y se establece la opción para ocultar o mostrar el side bar
    //posteriormente se itera en el arreglo de items y por cada uno se coloca el elemento en la side bar que redirige a su respectivo path
    return (
        <div className="contenedor">
            <div style= {{width: isOpen ? "264px":"50px"}} className="sidebarAdmin">
                <div className="top_section">
                    <h1 style= {{display: isOpen ? "block":"none"}} className="logo">Horarios de salones FEI</h1>
                    <div style= {{marginLeft: isOpen ? "50px":"0px"}} className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="linkAdmin">
                            <div className="icon">{item.icon}</div>
                            <div style= {{display: isOpen ? "block":"none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default SideBarAdmin;