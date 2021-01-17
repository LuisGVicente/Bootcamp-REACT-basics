import React, { useReducer } from 'react'

const initialState = {count: 0};
//Definismo la función reducer. Solemos usar un swtich para recoger todas los escenarios
function reducer(state, action){
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        case 'reset':
            return initialState;
        default:
            throw new Error();
    }
}
export default function CounterUserReducer(props) {

    const [state, dispatch] = useReducer(reducer, initialState);
    //El estado se corresponde con el STORE


    return (
        <div>
            <p>Count: {state.count}</p>
    {/* La vista se suscribe al estado directamente porque cuando cambia el strore/state se modifica la view */}
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    {/* Desde la vista, podemos hacer una action a través del dispatch. El dispatch usa el Reducer para volver a modificar el store/estado */}
        </div>
    )
}

