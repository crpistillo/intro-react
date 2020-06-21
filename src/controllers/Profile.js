import React, {Component} from 'react';
import {app} from "../app/app";

//TODO: Para poder realizar una llamada a una API


export class Profile extends Component {
    constructor(props) {
        super(props); //TODO: Si definimos el constructor lo primero que hay que hacer es llamar a esto
                      //TODO: se lllama a la clase "Component" con las props

        this.state = {
            userData: {}
        };

        //TODO: Binding en el constructor.
        this.handleApiResponse = this.handleApiResponse.bind(this);
    }

    //TODO: En general para hacer llamadas a una API (en la carga de una url) lo que mas se usa es el componentDidMount
    //TODO: es el ultimo paso del montado de un componente
    componentDidMount() {
        this.getUserData();
    }

    //TODO: El render es la unica funcion obligatoria a definir dentro del ciclo de vida de un componente
    //TODO: ni siquiera el constructor es esencial
    render() {
        return (
            <div>
                <h2>Perfil del usuario</h2>
                <p>Email: {this.state.userData.email}</p>
                <p>Nombre: {this.state.userData.firstName}</p>
                <p>Apellido: {this.state.userData.lastName}</p>
            </div>
        )
    }


    //TODO: Seteo el state con el json obtenido en la response para que se muestre el resultado en el render
    //TODO: Nombre, apellido, email (ver el render de arriba)
handleApiResponse(response) {
        this.setState({userData: response.userPersonalData()})
    }

    //TODO: esto hace un fetch a la url que mi api publica indica que me da un usuario
    getUserData() {
        //TODO: fetch es una funcion que da la api request de JS que devuelve una Promise (asincronico)
        //TODO: con una response http. El .json de la response tambien devuelve Promise
        //TODO: then recibe una funcion: callback

        //const url = getSetting('API_URL') + "/users/2";
        //fetch(url).then(response => response.json()).then(this.handleApiResponse);
        //TODO: el 'this' de aca no es el componente (la clase), sino el this dentro de este scope/contexto de
        //TODO: esta funcion, sino del modulo que la este ejecutando

        app.apiClient().getProfile(this.handleApiResponse); //TODO: aprovecho a usar la app para obtener el cliente
        // TODO: que tiene toda la interfaz de los msjes que quiero usar para pegarle a mi api
    }
}
