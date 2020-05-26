import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Redux
import { connect } from 'react-redux';
import { getPark } from './redux/actions/actionParks';
import { getParkSuccess } from './redux/actions/actionParks';

//Components
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import Auth from './components/Auth';

//Pages
import Home from './pages/Home';
import Details from './pages/Details';
import Login from './pages/Login';
import User from './pages/User';
import NotFound from './pages/NotFound';

//Firebase
import firebase from 'firebase';
import "firebase/database";

class App extends React.Component {

  //En esta seccion se esta haciendo una llamada a la base de datos de firebase para obtener
  //los datos y pasarlos a redux para que esten disponible en toda la aplicacion
  async componentDidMount(){
    try{
      const fire = firebase.firestore();
      const colection = fire.collection("parks");
      colection.onSnapshot(snapshot => {
        let parks = []
        snapshot.forEach(park => {
          parks = [...parks, park.data()];
        })
        this.props.getParkSuccess(parks);
      })
    }
    catch(error){
      alert("Hubo un error al intentar obtener los datos del servidor");
      console.log(error);
    }
    
  }

  render(){
    return (
      <Router>
        <Loading>
          <Navbar/>
          <Switch>
            <Route exact path="/details" component={Details}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/" component={Home}/>

            {/*Rutas privadas */}
            <Auth>
              <Route exact path="/user" component={User}/>
            </Auth>

            <Route component={NotFound}/>
          </Switch>
        </Loading>
      </Router>
    );
  }
}

//Configuracion para redux
const mapDispatchToProps = {
  getPark,
  getParkSuccess
}

const mapStateToProps = (state) => ({
  parks: state.parks
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
