import React from "react";
import './Botao.css'

const Botao = props => {
    return(
        <button className="Botao">{props.label}</button>
    )
}

export default Botao