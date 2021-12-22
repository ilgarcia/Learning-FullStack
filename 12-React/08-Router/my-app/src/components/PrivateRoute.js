import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


export default function PrivateRoute({ children }) {

    const login = useSelector((state) => state);

    // const auth = useAuth();
    return login ? children : <Navigate to="/negado" />;
  }


