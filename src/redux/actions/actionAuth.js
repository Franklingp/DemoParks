import { createAction } from 'redux-actions';

//Acciones para manejar la autenticacion
export const login = createAction("LOGIN");
export const logout = createAction("LOGOUT");