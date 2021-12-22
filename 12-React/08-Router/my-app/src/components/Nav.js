import React, { useEffect } from "react";
import AuthButton from "../components/AuthButton";

import { Link, useNavigate  } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Nav(props) {
    const login = useSelector((state) => state);

    const navigate = useNavigate();

    useEffect(() => {
        if (login) {
            navigate("/aulas");
        }
    }, [login]);

    return (
        <div className="nav">
            <h1>Igod</h1>
            <div className="nav-links">
                <AuthButton></AuthButton>
                <li>
                    <Link to="/aulas">Aulas</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
            </div>
        </div>
    );
}
