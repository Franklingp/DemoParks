import { handleActions } from 'redux-actions';

//Estos son los reducers para llevar el control del estado global de la autenticacion
const reducerAuth = handleActions({
    LOGIN: (state, {payload}) => {
        const newState = {
            user: payload,
            isAuth: true
        }
        alert("Ha iniciado sesion correctamente");
        return newState;
    },
    LOGOUT: (state, {payload}) => {
        const newState = {
            user: '',
            isAuth: false
        }
        alert("Ha cerrado sesion correctamente");
        return newState;
    }
}, {
    user: "",
    isAuth: false
})

export default reducerAuth;