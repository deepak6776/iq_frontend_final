import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Bet from './components/Bet';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Panel from './components/Panel';
import Scheduler from './components/Scheduler';
import Test from './components/Test';
import Navigation from './components/Navigation';

import Button from 'react-bootstrap';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <h3 className="m-3 d-flex justify-content-center">Iq Option Bot</h3> */}
        <Navigation />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/login' component={Login} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/scheduler' component={Scheduler} />
          <Route path='/panel' component={Panel} />
          <Route path='/bet' component={Bet} />
          <Route path='/test' component={Test}/>
        </Switch>
    </div>
    </BrowserRouter>
    
  );
}

export default App;