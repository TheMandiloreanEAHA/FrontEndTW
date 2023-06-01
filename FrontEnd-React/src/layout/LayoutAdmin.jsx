import { Outlet, useNavigation } from "react-router-dom";
import SideBarAdmin from "../components/SideBarAdmin";



const LayoutAdmin = () => {

    const navigation = useNavigation();

    return (
        <>
            <div className="contenidoRoot">
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
        </>
    );
};

export default LayoutAdmin;
