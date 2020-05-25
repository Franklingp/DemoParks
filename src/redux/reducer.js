import { handleActions } from 'redux-actions';

const actions = handleActions({
    GET_PARKS: (store, {payload}) => {
        return [...payload];
    } 
}, [])

export default actions;