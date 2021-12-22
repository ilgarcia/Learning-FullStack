import React, {useState, createContext} from "react";

export const ContadorCotexto = createContext()

export function ContadorProvider(props) {

    const [contagem, setContagem] = useState(0)
    
    return (
        <ContadorCotexto.Provider value={[contagem, setContagem]}>
            {props.children}
        </ContadorCotexto.Provider>
    )
}