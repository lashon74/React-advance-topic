import React, { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);

  const reset = () => {
    setCount(0);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      setCount((prevState) => {
        return prevState + 1
      })
    },2000)
  }
  return (
    <>
      <h2>Regular counter</h2>
      <h1>{count}</h1>
      <button
        className='btn'
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Descrease
      </button>
      <button className='btn' onClick={reset}>
        Reset
      </button>
      <button
        className='btn'
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <h2>Complex counter</h2>
      <h1>{count}</h1>
     
      <button
        className='btn'
        onClick={complexIncrease}
      >
        Increase later
      </button>
    </>
  );
};

export default UseStateCounter;
