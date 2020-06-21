import ApiClient from "communication/client/ApiClient";
import {getSetting} from "settings";
import FakeRequester from "communication/requester/FakeRequester";
import RemoteRequester from "communication/requester/RemoteRequester";

class App {
    constructor() {
        this._apiClient = undefined;
    }

    apiClient() {
        if (this._apiClient === undefined) {
            this._setUpApiClient();
        }

        return this._apiClient;
    }

    //TODO: define un diccionario con clave:  valor, cuyo valor es la url final
    //TODO: me sirve para centralizar las url en un solo lugar
    routes() {
        return {
            login: '/',
            home: '/home',
            profile: '/profile'
        }
    }

    //TODO: Encapsula el concepto de guardar el token en el localStorage
    loginUser(token) {
        localStorage.setItem("token", token);
    }

    thereIsLoggedInUser() {
        return localStorage.getItem("token");
    }

    _setUpApiClient() {
        const requester = this._setUpRequester(); //TODO: da de alta un requester
        this._apiClient = new ApiClient(requester); //TODO: se lo pasa como parametro al API cliente que es
                                                    // quien va a realizar los pedidos
    }

    _setUpRequester() {
        const usingFakeApi = getSetting("USING_FAKE_API"); //TODO: leo la venv
        if (usingFakeApi) {
            return new FakeRequester();
        }

        const remoteApiUrl = getSetting("API_URL");
        return new RemoteRequester(remoteApiUrl);
    }
}

//TODO: defino un objeto y lo exporto como singleton (accedo desde todos lados a la misma instancia de objeto)
export let app = new App();