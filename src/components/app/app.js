import React from 'react';
import './app.css';
import UsersContainer from "../users-list/users-container";
import UserContainer from '../user-page/user-container';
import {Route, Switch} from "react-router-dom";
import FormContainer from '../form/form-container'

const App = () => {
    return (
        <Switch>
            <Route path='/' exact component={UsersContainer} />
            <Route path='/user/:id' component={UserContainer} />
            <Route path='/form' component={FormContainer} />
        </Switch>
    )
};

export default App;
