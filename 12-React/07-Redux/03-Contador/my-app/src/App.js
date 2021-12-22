import "./App.css";
import React from "react";
import Contador from "./components/Contador";
import Header from "./components/Header";
import { createStore, combineReducers} from "redux"
import contadorReducer from "./reducers/contadorReducer"
import {Provider} from "react-redux"

function App() {

    const allReducers = combineReducers({
        counter: contadorReducer
    })
    const store = createStore(allReducers)

    return (
        <div className="App">
            <Provider store = {store}>
                <Header></Header>
                <Contador></Contador>
            </Provider>
        </div>
    );
}

export default App;
