import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import data from "../Data";

export default function Aulas(props) {
    const location = useLocation()

    const [url, setUrl] = useState("")

    useEffect(()=>{
        const newUrl = location.pathname.slice(-1) === '/' ? location.pathname : location.pathname + "/"
        setUrl(newUrl)
    },[location])

    return (
        <div className="page">
            <h1>Aulas</h1>
            <ul className="aulas">
                {data.map((aula) => (
                    <li key={aula.id}>
                        <Link className="link" to={`${url}${aula.id}`}>{aula.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
