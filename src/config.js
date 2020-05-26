import firebase from 'firebase/app'
import "firebase/firestore";

//Estas son datos globales que usa toda la app como la url de la api

export const config = {
    url: "https://developer.nps.gov/api/v1",
    key: "WB0fBtsVcdrRKW69vAMCumcXs4ImsDW8G5O8wRk0"
}

//Configuracion para la integracion con Firebase
export const firebaseConfig = {
    apiKey: "AIzaSyB1ruAWnNhdaMlKwf-YT5LwCBcgqeRGk0A",
    authDomain: "washington-parks.firebaseapp.com",
    databaseURL: "https://washington-parks.firebaseio.com",
    projectId: "washington-parks",
    storageBucket: "washington-parks.appspot.com",
    messagingSenderId: "150193477794",
    appId: "1:150193477794:web:0e1bf42b1eebf4959b1ffb"
};

//inicializacion de firebase
firebase.initializeApp(firebaseConfig);
  
export const firestore = firebase.firestore();