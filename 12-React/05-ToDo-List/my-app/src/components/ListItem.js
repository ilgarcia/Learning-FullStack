import React from "react";
import Card from "./Card";

function ListItem(props) {
    function DoneImg(props) {
        if (props.done) {
            return <img src="./assets/on.png" alt="on" />;
        } else {
            return <img src="./assets/off.png" alt="off" />;
        }
    }

    return (
        <li >
            <Card className={props.item.done ? "done item" : "item"}>
                {props.item.text}
                <div className="checkButton">
                    <button
                        onClick={() => {
                            props.onDone(props.item);
                        }}
                    >
                        <DoneImg done={props.item.done}></DoneImg>
                    </button>
                    <button
                        onClick={() => {
                            props.onItemDeleted(props.item);
                        }}
                    >
                        <img src="./assets/bin.png" alt="bin" />
                    </button>
                </div>
            </Card>
        </li>
    );
}

export default ListItem;
