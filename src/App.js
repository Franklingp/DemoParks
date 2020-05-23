import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Redux
import { connect } from 'react-redux';
import { getPark } from './redux/actions';

//Pages
import Home from './pages/Home';
import Details from './pages/Details';
import NotFound from './pages/NotFound';

class App extends React.Component {

  async componentDidMount(){
    await this.props.getPark();
  }

  render(){
    return (
      <Router> 
        <Switch>
          <Route exact path="/details" component={Details}/>
          <Route exact path="/" component={Home}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

//Configuracion para mapear las acciones a las props
const mapDispatchToProps = {
  getPark
}

export default connect(null, mapDispatchToProps)(App);
