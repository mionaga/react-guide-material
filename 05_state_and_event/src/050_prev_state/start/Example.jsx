import { useState } from "react";

const Example = () => {
    const [count, setCount] = useState(0);
    const addCount = () => {
        setCount(count + 1);
    };
    const disCount = () => {
        setCount(count - 1);
    };

  return (
    <>
        <p>現在のカウント数： { count }</p>
        <button onClick={addCount}>+</button>
        <button onClick={disCount}>-</button>
    </>
  )
};

export default Example;
