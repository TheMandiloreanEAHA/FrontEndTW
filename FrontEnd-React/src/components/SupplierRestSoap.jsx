import axios from "axios";

const API_URL = "https://intermediariosoap-production.up.railway.app/registros";
//realiza el get a el API soap
const getAllRegistros = async () => {
    return await fetch(API_URL);
};
//realiza un get basandose en el ID del aula
const getregistroByAula = async (aulaId) => {
    return await fetch(`${API_URL}${aulaId}`);
};
//realiza un post para hacer un nuevo registro
const newRegistro = async (aula,nombre,fecha,hora) => {
    const json = {
        aula: aula,
        nombre: nombre,
        fecha: fecha,
        hora: hora
    }

    await axios
        .post(API_URL, json)
        .then((response) => {
            return response.data;
        })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error);
        });
};
// realiza el delete de los registros, no se usa actualmente
const deleteRegistro = async (registroId) => {
    return await fetch(`${API_URL}${registroId}`, {
        method:'DELETE'
    });
};

export { getAllRegistros, getregistroByAula, newRegistro, deleteRegistro }