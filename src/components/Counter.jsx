import { useState } from 'react';

function Counter() {
  //   const [count, setCount] = useState(0);
  //
  //   return (
  //     <>
  //       <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
  //       <span>{count}</span>
  //       <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
  //       <button onClick={() => setCount(count => (count = 0))}>Reset</button>
  //     </>
  //   );
  // ***********************************************************
  //
  // CART EXAMPLE
  //   const [cart, setCart] = useState({
  //     item: 'apple',
  //     quantity: 10,
  //   });
  //
  //   function removeApple() {
  //     setCart(prevCart => {
  //       return {
  //         ...prevCart,
  //         quantity: prevCart.quantity - 1,
  //       };
  //     });
  //   }
  //
  //   function addApple() {
  //     setCart(prevCart => {
  //       return {
  //         ...prevCart,
  //         quantity: prevCart.quantity + 1,
  //       };
  //     });
  //   }
  //
  //   return (
  //     <>
  //       <button onClick={removeApple}>-</button>
  //       {cart.quantity}
  //       {cart.item}
  //       <button onClick={addApple}>+</button>
  //     </>
  //   );
}

export default Counter;
