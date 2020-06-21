import React, {Component} from 'react';
import {getSetting} from '../settings';
import "../assets/css/Login.css";

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleApiResponse = this.handleApiResponse.bind(this);
    }

    render() {
        return (
            //TODO: permite cargar el email y la password y se agrega un boton
            <div className="container">
                <div className="form">
                    <input name="email" type="email" placeholder="Email" onChange={this.handleInputChange}/>
                    <input name="password" type="password" placeholder="Password" onChange={this.handleInputChange}/>
                    <button onClick={this.handleSubmit}>INGRESAR</button>
                </div>
            </div>
        )
    }

    //TODO: Para manejar lo que ingresa el usuario. Se ejecuta cada vez que el usuario presiona una tecla
    handleInputChange(event) {
        const input = event.target; //TODO: target = elemento que fue clickeado al ingresar datos
        this.setState({[input.name]: input.value}); //TODO: email, psw
    }

    //TODO: Guardo el token en el navegador (a traves de local storage) y redirecciono al home
    handleApiResponse(response) {
        //TODO: El local storage es una especie de almacenamiento que nos da el navegador
        //TODO: localStorage: vive hasta que lo borres
        //TODO: sessionStorage: se muere con la sesion de usuario
        localStorage.setItem("token", response.token); //TODO: solo acepta strings
        this.props.history.push("/home"); //TODO: A todas las rutas se les inyecto este objeto "history" que sirve
                                          //TODO: para navegar
    }

    //TODO: Es lo que se corre cuando el usuario de click al boton "Ingresar"
    handleSubmit() {
        const requestConfig = {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {'Content-Type': 'application/json'}
        };

        //TODO: Hago un post al login de mi api publica
        const url = getSetting('API_URL') + "/login";
        fetch(url, requestConfig).then(response => response.json()).then(this.handleApiResponse);
    }
}
