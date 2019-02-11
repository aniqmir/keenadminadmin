import React from 'react';
import {
    Router,
    Route
    }   from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import SignIn from '../SignIn/SignIn.jsx';
import Drawer from '../Drawer/Drawer.jsx';

const customHistory = createBrowserHistory();



const CustomRoutes = () => (
    <Router history={customHistory}>
        <div>
            <Route exact path='/' component={SignIn}/>
            <Route exact path='/home' component={Drawer}/>
        </div>
    </Router>
    )
    
export default CustomRoutes;