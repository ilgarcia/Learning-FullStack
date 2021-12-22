import React, { useContext } from "react";
import { ContadorCotexto } from "../ContadorContexto";

function Header(props) {
    const [contagem, setContagem] = useContext(ContadorCotexto);
    return (
        <div className="header">
            <h3>Contador</h3>
            <div>{contagem}</div>
        </div>
    );
}

export default Header;
