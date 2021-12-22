const redux = require("redux");
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;

const {
    incrementAction,
    decrementAction,
} = require("./actions/CounterActions");

const {
    addItemAction
} = require("./actions/ListActions");

const CounterReducer = require('./reducers/CounterReducer')
const ListReducer = require('./reducers/ListReducer')

const allReducers = combineReducer({
    counter: CounterReducer,
    list: ListReducer,
});

const store = createStore(allReducers);

console.log(store.getState().list);

// Conjunto subscribe || dispatch

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addItemAction("Um novo item"));
store.dispatch(incrementAction(0));
store.dispatch(incrementAction(2));
store.dispatch(incrementAction(1));
store.dispatch(incrementAction(2));
