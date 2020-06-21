import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Home} from "../controllers/Home";
import "../App.css"

class Routes extends Component {
    render() {
        return (
            //TODO: aca dentro puede haber tantas rutas como queramos
            //TODO: cada componente routeado aca matchea con un controller
            <Router key="router">
                <Route exact path={"/home"} component={Home}/>
            </Router>
        )
    }


}

export default Routes;