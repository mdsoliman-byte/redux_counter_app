// select elements from ui 
const display = document.getElementById("display")
const increment = document.getElementById("increment")
const deincrement = document.getElementById("deincrement");

// // inital count 
// let count = 0;


// // add eventListner 
// increment.addEventListener("click", () => {
//     count++;
//     display.innerHTML = count;

// });
// deincrement.addEventListener("click", () => {
//     count--;
//     display.innerHTML = count

// })

// Initial State 
const initialState = {
    value: 0
}

// Action 
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
//  Create Reducer function 
const createReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT: return {
            ...state,
            value: state.value + 1
        }
        case DECREMENT: return {
            ...state,
            value: state.value - 1
        }

        default:
            return state;
    }
}

// Create Store 
const store = Redux.createStore(createReducer)
// Rednder Store 
const render = () => {
    const currentState = store.getState();
    display.innerText = currentState.value
}
// SUBSCRIBE store 

store.subscribe(render)
// Add Event Listner 
increment.addEventListener("click", () => {
    store.dispatch({
        type: INCREMENT
    })
})
deincrement.addEventListener("click", () => {
    store.dispatch({
        type: DECREMENT
    })
})