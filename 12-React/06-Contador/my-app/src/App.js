import "./App.css";
import React from "react";
import Contador from "./components/Contador";
import Header from "./components/Header";
import { ContadorProvider } from "./ContadorContexto";

function App() {
    return (
        <div className="App">
            <ContadorProvider>
                <Header></Header>
                <Contador></Contador>
            </ContadorProvider>
        </div>
    );
}

export default App;
