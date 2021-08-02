const initialState = {
    results:[],
}

const reducer = (state = initialState,action) =>{
    if(action.type === "STORE_RESULT"){
        return{
            ...state,
            results: state.results.concat({id: new Date(), value: action.result})
        }
    }
    if(action.type === "DELETE_RESULT"){
        const updatedArray = state.results.filter(result => result.id !== action.resultElId)
        console.log(updatedArray)
        return{
             ...state,
             results: updatedArray
        }
    }
    return state;
};

export default reducer;