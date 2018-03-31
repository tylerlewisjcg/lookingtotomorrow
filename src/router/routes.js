import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './../components/NotFound';
import LoginPage from './../components/notLoggedIn/LoginPage';
import Achievements from './../components/loggedIn/homeChildren/Achievements';
import CareerHistory from './../components/loggedIn/homeChildren/CareerHistory';
import Motivations from './../components/loggedIn/homeChildren/Motivations';
import CareerGoals from './../components/loggedIn/homeChildren/CurrentGoals';
import Home from './../components/loggedIn/Home';



export default (
<Switch>
    <Route exact path='/' component={LoginPage}/>

    <Route component={NotFound}/>    
</Switch>

)