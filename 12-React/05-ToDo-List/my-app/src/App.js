import "./App.css";
import React, { useEffect, useState } from "react";
import Item from "./components/Item";
import List from "./components/List";
import Modal from "./components/Modal";
import TodoForm from "./components/TodoForm";

function App() {
    const[showModal, setShowModal] = useState(false)
    const [items, setItems] = useState([]);

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem("savedItems"));
        if (savedItems) {
            setItems(savedItems);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("savedItems", JSON.stringify(items));
    }, [items]);

    function onAddItem(text) {
        let itemClass = new Item(text);
        setItems([...items, itemClass]);
    }

    function onItemDeleted(item) {
        let filteredItems = items.filter(
            (itemClass) => itemClass.id !== item.id
        );
        setItems(filteredItems);
    }

    function onDone(item) {
        let updateItems = items.map((itemClass) => {
            if (itemClass.id === item.id) {
                itemClass.done = !itemClass.done;
            }
            return itemClass;
        });

        setItems(updateItems);
    }

    function onHideModal(e) {
        let target = e.target;
        if (target.id === 'modal') {
            setShowModal(false)
        }
        
    }

    return (
        <div className="container">
            <header className="header">
                <h1>ToDo</h1>
                <button onClick={()=>{setShowModal(true)}} className="addButton">+</button>
            </header>
            <List
                onItemDeleted={onItemDeleted}
                onDone={onDone}
                items={items}
            ></List>

            <Modal show={showModal} onHideModal={onHideModal}>
                <TodoForm onAddItem={onAddItem}></TodoForm>
            </Modal>
        </div>
    );
}

export default App;
