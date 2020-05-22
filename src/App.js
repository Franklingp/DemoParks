import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//Pages
import Home from './pages/Home';
import Details from './pages/Details';
import NotFound from './pages/NotFound';

function App() {
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

export default App;
