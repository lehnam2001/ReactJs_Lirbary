import React, { useState } from 'react';

 const Couter2 = () => {
    const [counter, setCounter]= useState(0);
    return (
        <>
            <div>Couter: {counter}</div>
            <button onClick={() => setCounter(counter + 1)}>Cộng</button>
            <button onClick={() => setCounter(counter - 1)}>Trừ</button>
        </>
    )
}


export default Couter2;