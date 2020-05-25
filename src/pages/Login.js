import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

//firebase
import { useFirebaseApp } from 'reactfire';
import "firebase/auth";

import { login } from '../redux/actions/actionAuth';
import { connect } from 'react-redux';
import './styles/Login.css';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const firebase = useFirebaseApp();

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await firebase.auth().signInWithEmailAndPassword(email, password);
            console.log(response);
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
                <input type="submit" value="Submit" disabled={!email || !password}/>
            </form>
        </section>
    )
}

const mapDispatchToProps = {
    login
}

export default connect(null, mapDispatchToProps)(withRouter(Login));
