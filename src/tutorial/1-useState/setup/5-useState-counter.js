import React, { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);

  const reset = () => {
    setCount(0);
  };
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
      <button
        className='btn'
        onClick={() => {
          setCount(count - 2);
        }}
      >
        Descrease by 2
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
      <button
        className='btn'
        onClick={() => {
          setCount(count + 2);
        }}
      >
        Increase by 2
      </button>
      <button
        className='btn'
        onClick={() => {
          setCount(count + 5);
        }}
      >
        Increase by 5
      </button>
    </>
  );
};

export default UseStateCounter;
