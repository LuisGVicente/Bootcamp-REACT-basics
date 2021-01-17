import React, { useContext, useState } from 'react';
//3.Importamos el contexto
import CounterContext from '../componentes/context/CounterContext';

export default function CounterContextComp() {
    //4. Usamos useContext para recoger el contexto arriba importado
    const initialValue = useContext(CounterContext);
    //Ahora podemos usar ese valor para lo que queramos
    const [count, setCount] = useState(initialValue);
    return (
        <>
            <p>Valor inicial traido del contexto: {count}</p>
        </>
    )
}
