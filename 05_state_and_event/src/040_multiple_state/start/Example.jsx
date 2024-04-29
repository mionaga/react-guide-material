// import { useState } from "react";

// const Example = () => {
//     const [countA, setCountA] = useState(0);
//     const [countB, setCountB] = useState(10);
//     const [countC, setCountC] = useState(100);
    
//     return (
//         <>
//             <label>
//                 <p>ボタンAを{countA}回押しました。</p>
//                 <button onClick={() => {
//                     setCountA(countA + 1);
//                 }}>ボタンA</button>
//             </label>
//             <label>
//                 <p>ボタンBを{countB}回押しました。</p>
//                 <button onClick={() => {
//                     setCountB(countB + 1);
//                 }}>ボタンB</button>
//             </label>
//             <label>
//                 <p>ボタンCを{countC}回押しました。</p>
//                 <button onClick={() => {
//                     setCountC(countC + 1);
//                 }}>ボタンC</button>
//             </label>
//         </>
//     )
  
// };

// export default Example;

import React, { useState } from "react";

const ButtonCounter = ({ label, count, setCount }) => {
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <label>
      <p>{label}を{count}回押しました。</p>
      <button onClick={handleClick}>{label}</button>
    </label>
  );
};

const Example = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(10);
  const [countC, setCountC] = useState(100);

  return (
    <>
      <ButtonCounter label="ボタンA" count={countA} setCount={setCountA} />
      <ButtonCounter label="ボタンB" count={countB} setCount={setCountB} />
      <ButtonCounter label="ボタンC" count={countC} setCount={setCountC} />
    </>
  );
};

export default Example;
