import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Auth extends React.Component {

    //El objetivo de este componente es hacer de interceptor, si el usuario no esta registrado e 
    //intenta acceder a una ruta privada entonces lo redirige al componente Login
    componentDidMount(){
        if(this.props.auth.isAuth !== true){
            alert("Debe iniciar sesion para tener acceso a esta pagina");
            this.props.history.push("/login");
        }
    }

    render(){
        return(
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(withRouter(Auth));