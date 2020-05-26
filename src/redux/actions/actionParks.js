import { createAction } from 'redux-actions';
import { getParks } from '../../services/fetch';

//Acciones de redux para gestionar el estado global de los parques

export const addPark = createAction("ADD_PARKS");
export const getParkSuccess = createAction("GET_PARKS");
export const getPark = () => async (dispatch) => {
    try{
        // let response = await getParks(1, 5);
        // dispatch(getParkSuccess(response));
        // response = await getParks(6, 10);
        // await dispatch(addPark(response));

        let response = await getParks(1, 5);
        console.log(response);

    }
    catch(error){
        alert("Error al intentar obtener datos de la API");
        console.log(error);
    }
}