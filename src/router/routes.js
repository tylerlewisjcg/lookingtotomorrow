import react from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './../components/NotFound';
import Home from './../components/Home';
import LoginPage from './../components/LoginPage';
import SubscribePage from './../components/SubscribePage';
import Achievements from './../components/Achievements';
import CareerHistory from './../components/CareerHistory';
import Motivations from './../components/Motivations';





export default (
<Switch>
    <Route exact path='/' component={LoginPage}/>
    <Route path='/subscribe' component={SubscribePage}/>
    <Route path='/home' component={Home}/>
    <Route path='/achievements' component={Achievements}/>
    <Route path='/career' component={CareerHistory}/>
    <Route path='/motivations' component={Motivations}/>
    <Route component={NotFound}/>    
</Switch>

)