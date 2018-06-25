import React from 'react';

const TextInput = ({placeholder}) =>{

  return (
    <div className = 'pa2'>
      <input type="text" name="RecipeName" placeholder={placeholder}/>
    </div>
  );
}
export default TextInput;
