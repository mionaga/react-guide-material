import { useReducer } from "react";
import { useState } from "react";

const Example = () => {
  const [state, setState] = useState(0);
  const [rstate, dispatch] = useReducer((prev, action) => {
    if(action === '+'){
      return ++prev;
    }else if (action === '-'){
      return --prev;
    }
  }, 0);

  const countup = () => {
    setState(prev => ++prev);
  }; 
  const rcountup = () => {
    dispatch('+');
  };
  const rcountdown = () => {
    dispatch('-');
  }

  return (
    <>
    <h3>{ state }</h3>
    <button onClick={countup}>+</button>

    <h3>{ rstate }</h3>
    <button onClick={rcountup}>+</button>
    <button onClick={rcountdown}>-</button>
    </>
  );
};

export default Example;
