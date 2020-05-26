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

//Prueba
import Prueba from './components/Prueba';

//Firebase
import firebase from 'firebase';
import "firebase/database";

class App extends React.Component {

  async componentDidMount(){
    // await this.props.getPark();


    const fire = firebase.firestore();
    const colection = fire.collection("parks");
    colection.onSnapshot(snapshot => {
      let parks = []
      snapshot.forEach(park => {
        //console.log(park.data());
        // parks[park.id] = park.data();
        parks = [...parks, park.data()];
      })
      //console.log(parks);
      this.props.getParkSuccess(parks);
    })
  }

  render(){
    console.log(this.props);
    return (
      <Router>
        <Loading>
          <Navbar/>
          <Switch>
            <Route exact path="/prueba" component={Prueba}/>
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

//Configuracion para mapear las acciones a las props
const mapDispatchToProps = {
  getPark,
  getParkSuccess
}

const mapStateToProps = (state) => ({
  parks: state.parks
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
