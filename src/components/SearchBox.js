import React from 'react';

const SearchBox = ({searchfield,searchChange,statevar}) =>{
  return (
    <div className = 'pa2 inline searchbox'>
    <input className='pa3 ba b--green bg-lightest-blue'
      type="search" id={statevar} placeholder={searchfield}
      onChange={searchChange}/>
  </div>
  );
}
export default SearchBox;
