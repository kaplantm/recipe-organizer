import React from 'react';
import Card from './Card';

const CardList = ({recipes}) => {

  const cardArray = recipes.map((recipe,i) => {
    return <Card key={i} name={recipe.name} image={recipe.image} link={recipe.link}/>
  })
  if(cardArray.length === 0){
      return <h2>No Matching Results</h2>
  }
  return (
    <div>{cardArray}</div>
  );
}

export default CardList;
