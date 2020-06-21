import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes/Routes';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    //TODO: Solo renderizamos el componente App
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root') //TODO: interaccion de JS con el DOM real
    //TODO: el id 'root' es el id que esta en el index.html
    //TODO: Todos los componentes que vamos renderizando se cargan acá adentro
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
