import axios from "axios";

const API_URL = "https://intermediariosoap-production.up.railway.app/registros";

const getAllRegistros = async () => {
    return await fetch(API_URL);
};

const getregistroByAula = async (aulaId) => {
    return await fetch(`${API_URL}${aulaId}`);
};



const newRegistro = async (aula,nombre,fecha,hora) => {
    const json = {
        aula: aula,
        nombre: nombre,
        fecha: fecha,
        hora: hora
    }

    console.log(json)

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
    // const auxJson = {
    //         aula:"aula",
    //         nombre:"nombre",
    //         fecha:"fecha",
    //         hora:"hora"
    //     }
    // console.log(auxJson)
    // return await fetch(API_URL, {
    //     method:'POST',
    //     headers:{
    //         'Content-Type':'application/json'
    //     },
    //     body: auxJson
    // });
};

const deleteRegistro = async (registroId) => {
    return await fetch(`${API_URL}${registroId}`, {
        method:'DELETE'
    });
};

export { getAllRegistros, getregistroByAula, newRegistro, deleteRegistro }