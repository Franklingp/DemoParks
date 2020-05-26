import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

//firebase
import { useFirebaseApp } from 'reactfire';
import "firebase/auth";

//redux
import { login } from '../redux/actions/actionAuth';
import { connect } from 'react-redux';
import './styles/Login.css';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const firebase = useFirebaseApp();

    //Este metodo se encarga de actualizar los datos del formulario con el estado
    const handleChange = e => {
        switch(e.target.name){
            case("email"):
                setEmail(e.target.value);
                break;
            case("password"):
                setPassword(e.target.value);
                break;
            default:
                alert("Error en el formulario");
        }
    }

    //Este Metodo se encarga de enviar los datos al servidor y enviar al cliente a una nueva
    //ruta de la aplicacion en caso de que el registro haya sido exitoso
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await firebase.auth().signInWithEmailAndPassword(email, password);
            props.login(email);      
            props.history.push("/user");
        }
        catch(error){
            console.log(error);
            alert("Hubo un error al intentar iniciar sesion");
        }
    }

    return (
        <section className="content">
            <h1> Login </h1>
            <form onSubmit={handleSubmit}>
                <input className="input" type="email" name="email" value={email} onChange={handleChange} placeholder="Email"/>
                <input className="input" type="password" name="password" value={password} onChange={handleChange} placeholder="Password"/>
                <input className="btn" type="submit" value="Submit" disabled={!email || !password}/>
            </form>
        </section>
    )
}

const mapDispatchToProps = {
    login
}

export default connect(null, mapDispatchToProps)(withRouter(Login));
