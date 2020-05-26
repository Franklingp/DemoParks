import React from 'react'
import { connect } from 'react-redux';
import { logout } from '../redux/actions/actionAuth';
import { withRouter } from 'react-router-dom';

//firebase
import { useFirebaseApp } from 'reactfire';
import "firebase/auth";

const User = (props) => {
    const firebase = useFirebaseApp();

    //Este metodo se encarga de cerrar sesion, cierra sesion en el estado local y en el servidor
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
            <p>
                Bienvenido, gracias por iniciar sesion. Tu email de registro es: <span style={{color: "#2b82cb"}}>{props.auth.user}</span>
            </p>
            <button className="btn" onClick={handleClick}>Logout</button>
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