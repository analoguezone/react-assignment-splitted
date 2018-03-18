import React from 'react';
import Char from './Validation/char-component'

const letterbox = (props) => props.inputValue.split('').map((letter,index) => {
  return <Char
    click={()=>props.deleteBoxHandler(index)}
    letter={letter}
    key={index}
    />
});

export default letterbox
