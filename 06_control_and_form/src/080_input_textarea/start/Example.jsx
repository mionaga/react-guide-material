import { useState } from "react";

const Example = () => {
  const [val, setVal] = useState("");
  const clearVal = () => setVal("")

  return (
    <>
  <label htmlFor="123">ラベル</label>
  <div>
    <input 
      type="text"
      id="123"
      placeholder="こんにちは"
      value={val}
      onChange={(e) => setVal(e.target.value)} 
    />
    <textarea
       name="" 
       id="456"
       value={val}
       placeholder="こんにちは"
       onChange={(e) => setVal(e.target.value)}
       />
  </div>
  <h3>{ val }</h3>
  <button onClick={clearVal}>クリア</button>
  </>
  
  );
};

export default Example;
