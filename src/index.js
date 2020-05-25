import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Firebase config
import { FirebaseAppProvider } from "reactfire";
import  { firebaseConfig } from './config.js';

//Redux config
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Provider store={store}>
       <App />
      </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
