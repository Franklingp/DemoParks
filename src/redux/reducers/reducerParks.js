import { handleActions } from 'redux-actions';

const reducersPark = handleActions({
    GET_PARKS: (store, {payload}) => {
        return [...payload];
    },
    ADD_PARKS: (store, {payload}) => {
        return [...store, ...payload];
    } 
}, [])

export default reducersPark;