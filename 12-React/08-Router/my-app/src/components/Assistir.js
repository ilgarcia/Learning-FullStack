import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

export default function Assistir(props) {
    const query = useQuery()

    useEffect(()=>{
        console.log(query)
        console.log(query.get("v"))

    })

    return(
        <div className='page'>
            <h1>url: http://localhost:3000/assistir?v=jkl</h1>
            {query.get("v")}
        </div>
    )
}