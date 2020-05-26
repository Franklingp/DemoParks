import { handleActions } from 'redux-actions';

//Este reducer se encarga de llevar el estado global de los parques
const reducersPark = handleActions({
    GET_PARKS: (store, {payload}) => {
        return [...payload];
    },
    ADD_PARKS: (store, {payload}) => {
        return [...store, ...payload];
    } 
}, [])

export default reducersPark;