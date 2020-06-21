import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    //Solo renderizamos el componente App
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') //interaccion de JS con el DOM real
    // el id 'root' es el id que esta en el index.html
    // Todos los componentes que vamos renderizando se cargan acá adentro

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
