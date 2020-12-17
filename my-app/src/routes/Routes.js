import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Register from '../pages/register';
import Login from '../pages/login';
import Home from '../pages/home';
import SaludoView from '../pages/saludoView'
import PrivateRoute from './components/PrivateRoute';



function routes() {
  return (
  <BrowserRouter>
    <Switch>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <PrivateRoute exact path="/home" component={Home}/>
        <Route exact path="/" component={SaludoView}/>
        <Redirect patch="/**" to="/" />

      </Switch>  
  </BrowserRouter>
  );
}

export default routes;
