import { handleActions } from 'redux-actions';

const actions = handleActions({
    GET_PARKS: (store, {payload}) => {
        console.log("GET_PARKS");
        return [...payload];
    } 
}, [])

export default actions;