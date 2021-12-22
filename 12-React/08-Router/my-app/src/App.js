import "./App.css";
import React from "react";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Negado from "./components/Negado";
import Aulas from "./components/Aulas";
import Aula from "./components/Aula";
import Sobre from "./components/Sobre";
import Assistir from "./components/Assistir";
import PrivateRoute from "./components/PrivateRoute";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import loginReducer from "./reducers/loginReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(loginReducer)

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Nav />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/aulas/:id" element={<Aula />} />
                        <Route path="/aulas" element={<PrivateRoute><Aulas /></PrivateRoute>} />
                        <Route path="/negado" element={<Negado />} />
                        <Route path="/sobre" element={<Sobre />} />
                        <Route path="/assistir" element={<Assistir />} />
                        <Route
                            path="*"
                            element={<div>Essa Rota Não existe</div>}
                        />
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
