import React from 'react';

const Scroll = (props) => {
  // console.log(props);
  return (
    <div style={{overflow:'scroll',borderTop:'5px solid black',height:'800px',marginTop:'1em'}}>
      {props.children}
    </div>
  );
}

export default Scroll;
