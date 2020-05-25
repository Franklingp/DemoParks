import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Redux
import { connect } from 'react-redux';
import { getPark } from './redux/actions';

//Components
import Navbar from './components/Navbar';
import Loading from './components/Loading';

//Pages
import Home from './pages/Home';
import Details from './pages/Details';
import Login from './pages/Login';
import User from './pages/User';
import NotFound from './pages/NotFound';

class App extends React.Component {

  async componentDidMount(){
    await this.props.getPark();
  }

  render(){
    return (
      <Router>
        <Loading>
          <Navbar/>
          <Switch>
            <Route exact path="/details" component={Details}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/user" component={User}/>
            <Route exact path="/" component={Home}/>
            <Route component={NotFound}/>
          </Switch>
        </Loading>
      </Router>
    );
  }
}

//Configuracion para mapear las acciones a las props
const mapDispatchToProps = {
  getPark
}

export default connect(null, mapDispatchToProps)(App);
