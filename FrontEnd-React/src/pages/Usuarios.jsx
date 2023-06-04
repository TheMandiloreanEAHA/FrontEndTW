const Usuarios = () => { 
    
    // const [usuarios, setUsuarios] = useState([]);

    // const listaRegistros = async () =>{
    //     try{
    //         const data = await (await getAllRegistros()).json();
    //         setRegistros(data.data);
    //     }catch(error){
    //         console.log(error);
    //     }
    // };

    // useEffect(() => {
    //     listaRegistros();
    //     // eslint-disable-next-line
    // });

    return(
        <>
        <div className="container">
            <h1>Usuarios</h1>
        </div>
        <div className="container">
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {usuarios.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.admin}</td>
                        <td><button type="button">Eliminar</button></td>
                    </tr>
                    ))} */}
                </tbody>
            </table>
        </div>
        </>
    );
}

export default Usuarios;