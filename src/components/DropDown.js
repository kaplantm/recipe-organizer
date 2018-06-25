import React from 'react';
import Option from "./Option"

const DropDown = ({dropChange,options,statevar}) =>{

  const optionsArray = options.map((option,i) => {
    return <Option key={i} val={option.val} text={option.text}/>
  })

  return (
    <div className = 'inline pa2'>
      <select className='pa3 ba b--green bg-lightest-blue'
        type="checkbox" id={statevar}
        onChange={dropChange}>
        {optionsArray}
      </select>
    </div>
  );
}
export default DropDown;
