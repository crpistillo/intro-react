import React from 'react';
import {Redirect, Route} from 'react-router-dom';

//TODO: Recibe el componente que quiero renderizar
export const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest}
               //TODO: Si el usuario esta logeado (tiene un token)
               render={props => localStorage.getItem("token") ?
                   //TODO: devuelvo el componente al que se quiere acceder
                   <Component {...props}/> :
                   //TODO: sino, lo derirecciono a '/' (ruta de login)
                   <Redirect to={{pathname: "/"}}/>
               }
        />
    );
};