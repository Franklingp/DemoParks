import { createAction } from 'redux-actions';
import { getParks } from '../services/fetch';

//Acciones de redux para gestionar el estado global de los parques

export const getParkSuccess = createAction("GET_PARKS");
export const getPark = () => async (dispatch) => {
    try{
        const response = await getParks();
        dispatch(getParkSuccess(response));
    }
    catch(error){
        alert("Error al intentar obtener datos de la API");
        console.log(error);
    }
}