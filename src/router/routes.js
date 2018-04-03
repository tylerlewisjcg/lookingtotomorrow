import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './../components/NotFound';
import Achievements from './../components/loggedIn/homeChildren/Achievements';
import CareerHistory from './../components/loggedIn/homeChildren/CareerHistory';
import CurrentGoals from './../components/loggedIn/homeChildren/CurrentGoals';
import Education from './../components/loggedIn/homeChildren/Education';
import Motivations from './../components/loggedIn/homeChildren/Motivations';
import Home from './../components/loggedIn/Home';



export default (
<Switch>
<Route path='/home' component={Home}/>        
<Route path='/achievements' component={Achievements}/>    
<Route path='/careerhistory' component={CareerHistory}/>    
<Route path='/currentgoals' component={CurrentGoals}/>    
<Route path='/education' component={Education}/>    
<Route path='/motivations' component={Motivations}/>         
    <Route component={NotFound}/>    
</Switch>

)