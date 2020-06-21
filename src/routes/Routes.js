import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import {app} from "../app/app";
import {Home} from "../controllers/Home";
import {Profile} from "../controllers/Profile";
import {Login} from "../controllers/Login";
import {PrivateRoute} from "./PrivateRoute";

class Routes extends Component {
    render() {
        return (
            //TODO: aca dentro puede haber tantas rutas como queramos
            //TODO: cada componente routeado aca matchea con un controller

            //TODO: Si ya tengo un token
            <Router key="router">
                      //TODO: Redirijo al home
                <Route exact path={app.routes().login} render={props => localStorage.getItem("token") ?
                    <Redirect to={{pathname: app.routes().home}}/> :
                    //TODO: Sino te dejo acceder al login
                    <Login {...props}/>
                }/>
                <PrivateRoute exact path={app.routes().home} component={Home}/>
                <PrivateRoute exact path={app.routes().profile} component={Profile}/>
            </Router>
            //TODO: Ahora la ruta de home y de profile son privadas: sino estoy loggeado no voy a poder acceder
        )
    }

}

export default Routes;