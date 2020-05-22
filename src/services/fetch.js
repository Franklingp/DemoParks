import { config } from '../config';
const { url, key } = config;

//Metodo para obtener los parkes de la api
export const getParks = async () => {
    const response = await api("GET", `/parks?api_key=${key}&limit=10&stateCode=DC`, null);
    const json = await response.json();
    return json.data;
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
        const respoonse = await fetch(url+route, cfg);
        return respoonse;
    }
    catch(error){
        alert("Ha ocurrido un error al intentar realizar la peticion al servidor");
        console.log(error);
    }
}