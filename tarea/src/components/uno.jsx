import React, { useState } from 'react';
const Uno = () =>{

    const [count, setCount] = useState(0);

    const mas = () => {
        setCount(count + 1);
    };

    const menos = () => {
        setCount(count - 1);
    };

return (
  <div>

    <h1>Contador simple:</h1>
    <button onClick={mas}>+ 1</button>
    <div className='centro' id="counter">{count}</div>
    <button onClick={menos}>- 1</button>

  </div>
);
};
export default Uno;