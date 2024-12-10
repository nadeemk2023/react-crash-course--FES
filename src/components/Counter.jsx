import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => setCount(count => (count = 0))}>Reset</button>
    </>
  );
}

export default Counter;
