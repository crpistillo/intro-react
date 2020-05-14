import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Home} from "../controllers/Home";
import {Profile} from "../controllers/Profile";
import {Login} from "../controllers/Login";

class Routes extends Component {
    render() {
        return (
            <Router key="router">
                <Route exact path={"/"} component={Login}/>
                <Route exact path={"/home"} component={Home}/>
                <Route exact path={"/profile"} component={Profile}/>
            </Router>
        )
    }


}

export default Routes;