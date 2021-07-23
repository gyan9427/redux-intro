// node call to redux
const redux = require('redux');

//create a store
const createStore = redux.createStore; //The store is just initialized

const initialState = {
    counter:0
}
// since a store requires a reducer so create one
// reducer requires two parameters a state and an action
// but the also has to be initialized as it carries two conditions initial and final 
const rootReducer = (state = initialState,action) => {
    return state;
}

//call the store and pass the reducer to it
const store = createStore(rootReducer);
console.log(store.getState())