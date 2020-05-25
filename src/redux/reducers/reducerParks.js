import { handleActions } from 'redux-actions';

const reducersPark = handleActions({
    GET_PARKS: (store, {payload}) => {
        return [...payload];
    } 
}, [])

export default reducersPark;