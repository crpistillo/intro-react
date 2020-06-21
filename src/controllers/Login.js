import React, {Component} from 'react';
import {app} from "../app/app";
import "../assets/css/Login.css";

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                email: '',
                password: ''
            },
            errorMessage: ''
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
                    <p className="formError">{this.state.errorMessage}</p>
                </div>
            </div>
        )
    }

    //TODO: Para manejar lo que ingresa el usuario. Se ejecuta cada vez que el usuario presiona una tecla
    handleInputChange(event) {
        const input = event.target; //TODO: target = elemento que fue clickeado al ingresar datos
        let formData = this.state.formData;
        formData[input.name] = input.value; //TODO: email, psw
        this.setState({formData: formData});
    }

    //TODO: Guardo el token en el navegador (a traves de local storage) y redirecciono al home
    handleApiResponse(response) {
        //TODO: El local storage es una especie de almacenamiento que nos da el navegador
        //TODO: localStorage: vive hasta que lo borres
        //TODO: sessionStorage: se muere con la sesion de usuario
        //localStorage.setItem("token", response.token); //TODO: solo acepta strings
        //this.props.history.push("/home"); 

        if (response.hasError()) {
            this.setState({errorMessage: response.errorMessages()});
        } else {
            app.loginUser(response.content().token); //TODO: Le aviso a app que se logeo para que haga lo que tenga que hacer
            this.props.history.push(app.routes().home); //TODO: A todas las rutas se les inyecto este objeto "history" que sirve
                                                        //TODO: para navegar
        }

    }

    //TODO: Es lo que se corre cuando el usuario de click al boton "Ingresar"
    handleSubmit() {
        app.apiClient().login(this.state.formData, this.handleApiResponse);
    }
}
