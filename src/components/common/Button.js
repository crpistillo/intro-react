import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "assets/css/Common.css";

//TODO: cree una clase con el boton por si quisiera reutilizarlo en otra ventana

export class Button extends Component {
    static defaultProps = { //TODO: Defino para ciertas props un valor default
        text: "Click acá"
    };

    render() {
        return (
            //TODO: validacion de los tipos de las props (con prop-types) -> me pone un warning
            <button onClick={this.props.onClick}>{this.props.text}</button>
        )
    }
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
};