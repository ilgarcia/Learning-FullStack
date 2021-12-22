const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;
const fetch = require("node-fetch");

const initialState = [{ id: 0, title: "Tarefa", completed: false }];

const addItem = (item) => {
    return { type: "ADD_TYPE", payload: item };
};


 function teste() {
    const testeee =  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())


    console.log(testeee)
}

const loadItemAndAdd = () => {
    return (dispatch) => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((res) => res.json())
            .then((json) => {
                dispatch(addItem(json));
            });
    };
};

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TYPE":
            return [...state, action.payload];

        default:
            return state;
    }
};

const store = createStore(listReducer, applyMiddleware(thunk));
// store.dispatch(addItem({ id: 1, title: "novo item", completed: true }));
store.dispatch(loadItemAndAdd());

console.log(store.getState());

store.subscribe(() => {
    console.log(store.getState());
});

teste()
