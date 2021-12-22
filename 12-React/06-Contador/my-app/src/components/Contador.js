import React, { useState, useContext } from "react";
import { ContadorCotexto } from "../ContadorContexto";

function Contador(props) {
    const [contagem, setContagem] = useContext(ContadorCotexto);

    return (
        <div>
            <div>{contagem}</div>
            <button
                onClick={() => {
                    setContagem((anterior) => anterior - 1);
                }}
            >
                -
            </button>
            <button
                onClick={() => {
                    setContagem((anterior) => anterior + 1);
                }}
            >
                +
            </button>
        </div>
    );
}

export default Contador;
