import { Outlet, useNavigation } from "react-router-dom";
import SideBarAdmin from "../components/SideBarAdmin";
import NavBar from "../components/NavBar";


const LayoutAdmin = () => {

    const navigation = useNavigation();

    return (
        <>
            <div className="contenidoRoot">
                <NavBar />
                <div className="info">
                    <SideBarAdmin />
                    <main className="main_container">
                        {/* Esto es el loading de espera */}
                        {navigation.state == "loading" && (
                            <div className="alert alert-info my-5">Loading...</div>
                        )}
                        {/* Esto lo que hace es traer lo de la página que deseemos */}
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
};

export default LayoutAdmin;
