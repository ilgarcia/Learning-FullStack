import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {addItem} from '../actions/listActions'



function TodoForm(props) {
    const [text, setText] = useState("");
    const dispatch = useDispatch()

    function handleChange(event) {
        let textHandle = event.target.value;
        setText(textHandle);
    }

    function addItemEvent(event) {
        event.preventDefault();
        if (text) {
            dispatch(addItem(text));
            setText("");
            props.onHideModal()
        }
    }

    return (
        <form>
            <input onChange={handleChange} type="text" value={text} />
            <button onClick={addItemEvent}>Add</button>
        </form>
    );
}

export default TodoForm;
