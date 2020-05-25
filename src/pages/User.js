import React from 'react'
import { connect } from 'react-redux';
import { logout } from '../redux/actions/actionAuth';
import { withRouter } from 'react-router-dom';

//firebase
import { useFirebaseApp } from 'reactfire';
import "firebase/auth";

const User = (props) => {
    const firebase = useFirebaseApp();

    const handleClick = async (e) => {
        try{
            await firebase.auth().signOut();
            await props.logout();
            props.history.push('/login');
        }
        catch(error){
            alert("Hubo un error al tratar de cerrar sesion");
            console.log(error);
        }

    }

    return (
        <section>
            <h1> User </h1>
            <p>Bienvenido, gracias por iniciar sesion. Tu email de registro es: {props.auth.user}</p>
            <button onClick={handleClick}>Logout</button>
        </section>
    )   
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = {
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(User));