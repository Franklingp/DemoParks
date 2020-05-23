import { config } from '../config';
const { url, key } = config;

//Metodo para obtener los parkes de la api
export const getParks = async () => {
    const response = await api("GET", `/parks?api_key=${key}&limit=5&stateCode=DC`, null);
    return response;
}

//Metodo reusable para hacer peticiones fetch a un api
const api = async (method, route, body) => {
    try{
        if(body !== null){
            body = JSON.stringify(body);
        }
        const cfg = {
            method,
            headers: {},
            body
        }
        const response = await fetch(url+route, cfg);
        const json = await response.json();
        return json.data;
    }
    catch(error){
        alert("Ha ocurrido un error al intentar realizar la peticion al servidor");
        console.log(error);
    }
}