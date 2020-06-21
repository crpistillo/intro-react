import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import {Home} from "../controllers/Home";
import {Profile} from "../controllers/Profile";
import {Login} from "../controllers/Login";
import {PrivateRoute} from "./PrivateRoute";

class Routes extends Component {
    render() {
        return (
            //TODO: aca dentro puede haber tantas rutas como queramos
            //TODO: cada componente routeado aca matchea con un controller
            <Router key="router">
                <Route exact path={"/"} render={props => localStorage.getItem("token") ?
                    <Redirect to={{pathname: "/home"}}/> :
                    <Login {...props}/>
                }/>
                <PrivateRoute exact path={"/home"} component={Home}/>
                <PrivateRoute exact path={"/profile"} component={Profile}/>
            </Router>
        )
    }

}

export default Routes;