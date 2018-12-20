import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import LandingPage from '../../home/screens/LandingPage';
import NotFoundPage from '../../home/screens/LandingPage';
import MovieScreen from '../../movies/screens';
import Player from '../../movies/components/player';
import MovieDetails from '../../movies/screens/selected';
// import Login from '../../auth/screens/login';
// import Register from '../../auth/screens/register';
// import LandingPage from '../../components/LandingPage';
// import NotFoundPage from '../../components/NotFoundPage';


const Router = ()=>(
    <BrowserRouter>
        <React.Fragment>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/movies" component={MovieScreen}/>
                <Route exact path="/movies/play/:id" component={Player}/>
                <Route exact path="/movies/details/:id" component={MovieDetails}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </React.Fragment>
    </BrowserRouter>
)

export default Router;
