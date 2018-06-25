import React from 'react';
import DropDown from './DropDown';
const NewRecipeForm = ({buttonClick,onInputChange}) => {
  //https://stackoverflow.com/questions/48371604/warning-functions-are-not-valid-as-a-react-child-using-a-conditional-rendering

  return (
    <div className="NewRecipeForm">
      <form>
        <div className="left">
          <span className="entry"><label>TITLE: </label><input type="text" name="RecipeName" placeholder="Mac & Cheese" id="name" onChange={onInputChange}/></span>
          <span className="entry"><label>IMAGE: </label><input type="text" name="RecipeName" placeholder="https://images.media-allrecipes.com/userphotos/600x600/5193809.jpg" id="image" onChange={onInputChange}/></span>
          <span className="entry"><label>LINK: </label><input type="text" name="RecipeName" placeholder="https://www.allrecipes.com/recipe/11679/homemade-mac-and-cheese/" id="link" onChange={onInputChange}/></span>
        </div>
        <div className="right">
          <span className="entry"><DropDown dropChange={onInputChange} statevar="difficulty" options={[
            {val:"0",text:"Any Difficulty"},
            {val:"1",text:"Easy"},
            {val:"2",text:"Medium"},
            {val:"3",text:"Difficult"}]}/></span>
          <span className="entry"><DropDown dropChange={onInputChange} statevar="time" options={[
            {val:"0",text:"Any Duration"},
            {val:"20",text:"<= 20 Minutes"},
            {val:"40",text:"<= 40 Minutes"},
            {val:"60",text:"<= 60 Minutes"}]}/></span>
        </div>
            <div className = 'pa2'>
              <button type="button" className="pa3" onClick={buttonClick}>Submit New Recipe</button>
            </div>
          </form>
        </div>
      );
    }

    export default NewRecipeForm;
