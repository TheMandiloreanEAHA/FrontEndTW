import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";


const LayoutPublic = () => {

    const navigation = useNavigation();

    return (
        <>
            <div className="contenidoRoot">
                <SideBar />
                {/* <NavBar /> */}
                <main className="main_container">
                    {/* Esto es el loading de espera */}
                    {navigation.state == "loading" && (
                        <div className="alert alert-info my-5">Loading...</div>
                    )}
                    {/* Esto lo que hace es traer lo de la página que deseemos */}
                    <Outlet />
                </main>
            </div>
        </>
    );
};

export default LayoutPublic;
