const initialState = {
    counter: 0,
    results:[],
}

const reducer = (state = initialState,action) =>{
    if(action.type === "INCREMENT"){
        return{
            ...state,
            counter: state.counter + 1
        }
    }
    if(action.type === "DECREMENT"){
        return{
            ...state,
            counter: state.counter - 1
        }
    }
    if(action.type === "ADD"){
        return{
            ...state,
            counter: state.counter + action.value
        }
    }
    if(action.type === "SUB"){
        return{
            ...state,
            counter: state.counter - action.value
        }
    }
    if(action.type === "STORE_RESULT"){
        return{
            ...state,
            results: state.results.concat(state.counter)
        }
    }
    return state;
};

export default reducer;

