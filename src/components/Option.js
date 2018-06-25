import React from 'react';

const Option = ({val,text}) =>{
  // console.log(val);
  return (
    <option value={val}>{text}</option>
  );
}
export default Option;
