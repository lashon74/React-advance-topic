import React, { useState } from 'react';


const UseStateBasics = () => {
  const [text, setText] = useState('Random title');

  const handleClick = () => {
    if (text === "Random title") {
      setText("Lashon page");
    } else {
      setText("Random title");
    }
  }
  return (
    <>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        Change title
      </button>
    </>
  );
};

export default UseStateBasics;
