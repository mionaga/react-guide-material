import { useState } from "react";

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [nums, setNums] = useState(numArray);
  const shuffle = () => {
    const newArray = [...nums];
    const popedNum = newArray.pop(-1);
    newArray.unshift(popedNum);
    setNums(newArray);
  }

  return (
    <>
      <h1>{nums}</h1>
      <button onClick={shuffle}>shuffle</button>
    </>
  );
};

export default Example;
