import {Endpoint} from "./Endpoint.js";
import {LoginSuccessful} from "../responses/login/LoginSuccessful";
import {InvalidCredentials} from "../responses/login/InvalidCredentials";

export class LoginEndpoint extends Endpoint {
    static url() {
        return '/login'
    }

    ownResponses() {
        return [LoginSuccessful, InvalidCredentials];
    }

    method() {
        return 'POST'
    }

    //TODO: Si para pegarle al endpoint necesito el token o no
    needsAuthorization() {
        return false;
    }
}