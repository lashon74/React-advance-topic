import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Lashon',
    age: 24,
    message: 'random message'
  })
 
  const [name, setName] = useState('Lashon')
  const [age, setAge] = useState(24)
  const [message, setMessage] = useState('Random Message')
  const handleClick = () => {
    // setPerson({...person, message: 'Hello Lashon'})
    setMessage(`Hello ${name}`)
}
  return <>
    <h3>{ name}</h3>
    <h3>{ age}</h3>
    <h3>{message}</h3>
    <button className='btn' onClick={handleClick}>
      CHange Message
    </button>
  </>;
};

export default UseStateObject;
