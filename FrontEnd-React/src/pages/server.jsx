const API_URL = "https://intermediariosoap-production.up.railway.app/registros";

export const getAllRegistros = async () => {
    return await fetch(API_URL);
};

export const getregistroByAula = async (aulaId) => {
    return await fetch(`${API_URL}${aulaId}`);
};

export const newRegistro = async (nuevoRegistro) => {
    return await fetch(API_URL, {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "aula":String(nuevoRegistro.aula),
            "nombre":Array(nuevoCamion.nombre),
            "fecha":String(nuevoCamion.fecha),
            "hora":String(nuevoCamion.hora),
        })
    });
};

export const deleteRegistro = async (registroId) => {
    return await fetch(`${API_URL}${registroId}`, {
        method:'DELETE'
    });
};