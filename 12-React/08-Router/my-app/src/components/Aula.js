import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../Data";


function useAula() {
    const id = useParams().id;
    return data.filter(aula => {return aula.id == id})[0]
}

export default function Aula(props) {
    const aula = useAula()

    return (
        <div className="page">
            <h1>{aula.title}</h1>
            <h1>{aula.desc}</h1>
        </div>
    );
}
