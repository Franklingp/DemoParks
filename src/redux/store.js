import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

//reducers
import reducerParks from './reducers/reducerParks';
import reducerAuth from './reducers/reducerAuth';

//Aqui va la configuracion de redux en la aplicacion

const reducers = combineReducers({
    parks: reducerParks,
    auth: reducerAuth
})

const store = createStore(reducers, {}, applyMiddleware(thunk));

export default store;