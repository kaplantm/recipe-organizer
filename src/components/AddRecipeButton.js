import React from 'react';
import NewRecipeForm from "./NewRecipeForm"


const AddRecipeButton = ({buttonClick,status,statevar,submitButtonClick,onInputChange}) =>{
  if(!status){
    return (
      <div className = 'pa2 newRecipe' >
        <button type="button" className="pa3" onClick={buttonClick}>Add New Recipe</button>
      </div>
    );
  }
  else{
    return (
      <div className = 'pa2 newRecipe'>
        <button type="button" className="pa3" onClick={buttonClick}>Cancel</button>
        <NewRecipeForm buttonClick={submitButtonClick} onInputChange={onInputChange}/>
      </div>
    );
  }
}
export default AddRecipeButton;
