import React from 'react';
import {
    Router,
    Route
    }   from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import SignIn from '../SignIn/SignIn.jsx';
import Drawer from '../Drawer/Drawer.jsx';
import ViewEmployee from '../Users/AllUsers/ViewUser/ViewUsers.jsx';
import EditEmployee from '../Users/AllUsers/EditUser/EditUser.jsx';

const customHistory = createBrowserHistory();



const CustomRoutes = () => (
    <Router history={customHistory}>
        <div>
            <Route exact path='/' component={SignIn}/>
            <Route exact path='/home' component={Drawer}/>
            <Route path='/view-employee/:id' component={ViewEmployee}/>
            <Route path='/edit-employee/:id' component={EditEmployee}/>
        </div>
    </Router>
    )
    
export default CustomRoutes;