import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//reducers
import reducer from './reducer';

const store = createStore(reducer, [], applyMiddleware(thunk));

export default store;