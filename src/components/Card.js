import React from 'react';

const Card = (props) => {
  const {name,image,link} = props
  const linkHTML = () => {
    if(link){
      return (
        <div>
          <div className="frame">
            <a href={link}><img alt='robot' src={image} width="300px;"/></a>
          </div>
          <div>
            <h2><a href={link}>{name}</a></h2>
            <p>test</p>
          </div>
        </div>)
      }
      else{
        return (<div><div className="frame">
          <img alt='robot' src={image} width="300px;"/>
        </div>
        <div>
          <h2>{name}</h2>
          <p>test</p>
        </div>
      </div>)
    }
  }

  return (
    <div className='bg-gray dib br3 pa3 ma2 grow bw2 shadow-5 tc card'>
      {linkHTML()}
    </div>
  );
}

export default Card;
