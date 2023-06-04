import { createBrowserRouter } from "react-router-dom";
import React from 'react';
import LayoutPublic from "../layout/LayoutPublic";
import Home from '../pages/Home';
import About from '../pages/About';
import Blog  from '../pages/Blog';
import NotFound from "../pages/NotFound";
import SolicitarAulas from "../pages/SolicitarAulas";
import Perfil from "../pages/Perfil";
import Login from "../pages/Login";
import LayoutAdmin from "../layout/LayoutAdmin";
import HomeAdmin from "../pages/HomeAdmin";
import Usuarios from "../pages/usuarios";
import Salones from "../pages/Salones";
import SalonesEnUso from "../pages/SalonesEnUso";
import HistorialSalones from "../pages/HistorialSalones";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
        errorElement: <NotFound />,
    },
    {
        path: '/home',
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,                
            },
            {
                path: '/home/about',
                element: <About />,                
            },
            {
                path: '/home/blog',
                element: <Blog />,
                
            },
            {
                path: '/home/solicitarAulas',
                element: <SolicitarAulas />,
            },
            {
                path: '/home/perfil',
                element: <Perfil />,
            },
            
        ]
    },
    {
        path: '/homeAdmin',
        element: <LayoutAdmin />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <HomeAdmin />,                
            },
            {
                path: '/homeAdmin/usuarios',
                element: <Usuarios />,
            },
            {
                path: '/homeAdmin/salones',
                element: <Salones />,
            },
            {
                path: '/homeAdmin/salonesUsados',
                element: <SalonesEnUso />,
            },
            {
                path: '/homeAdmin/historial',
                element: <HistorialSalones />,
            },
        ]
    },

]);

