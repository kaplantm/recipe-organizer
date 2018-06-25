import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import DropDown from '../components/DropDown';
import Scroll from '../components/Scroll';
import AddRecipeButton from '../components/AddRecipeButton';
import ErrorBoundary from '../components/ErrorBoundary';
import {starting_recipes} from '../resources/recipes.js';


class App extends Component {
  constructor(){
    super();

    this.state = {
      globalrecipes: [],
      localrecipes: [],
      searchfield: '',
      sortdifficulty:"0",
      sorttime:"0",
      status:false,
      addingNew: {
        name: "booop",
        image: "",
        link: "",
        difficulty: "1",
        time:"20",
      }
    }
  }

  componentDidMount(){
    this.setState({globalrecipes:starting_recipes});
    let localrecipesTemp = this.getLocal();
    this.setState({localrecipes:localrecipesTemp});
  }


  getLocal = () => {
      console.log("hey1");
            // Check browser support
          if (typeof(Storage) !== "undefined") {
              console.log("hey2");
            var localRecipes = localStorage.getItem("recipes");
            if(localRecipes){
                return JSON.parse(localRecipes);
            }
            else{
              return [];
            }
          }
          else {
              console.log("Unable to load local recipes. Your browser does not support local storage.");
              return [];
          }
    }
    setLocal = (initial) => {
        console.log("hey1");
              // Check browser support
            if (typeof(Storage) !== "undefined") {
                console.log("yee");
                var stringify = JSON.stringify(this.state.localrecipes);
                console.log(stringify);
                localStorage.setItem("recipes",stringify);
                console.log(stringify);
            } else {
                console.log("Unable to load local recipes. Your browser does not support local storage.");
            }
            // this.setState({recipes:starting_recipes});
      }
  onGenericChange = (event) => {
    let stateUpdate = event.target.id;
    this.setState({[stateUpdate]:event.target.value});
  }
  onToggleNewRecipe = (event) => {
    let toggle = !this.state.status;
    this.setState({
      status:toggle,
      addingNew:{
        name: "",
        image: "",
        link: "",
        Difficulty:"1",
        Time:"20",
      }
    });
  }
  onRecipeSubmit = (event) => {
    let localrecipesTemp = this.state.localrecipes;

    const setIMG = () => {
      if(this.state.image){
        return this.state.image;
      }
      else{
        return "https://4vector.com/i/free-vector-cooking_100686_cooking.png";
      }
    }

    let img = setIMG();

    console.log("img2 "+this.state.image+" "+img);

    localrecipesTemp.push({
      name: this.state.name,
      image: img,
      link: this.state.link,
      Difficulty:this.state.difficulty,
      Time:this.state.time,
    })
    this.setState({localrecipes:localrecipesTemp});

    this.onToggleNewRecipe();
    this.setLocal();
  }

  render(){
    const {globalrecipes, localrecipes, searchfield,sortdifficulty,sorttime,status} = this.state;
    // const {name,image,link} = addingNew;
    let allrecipes = globalrecipes.concat(localrecipes);
    const filteredRecipes =
    (allrecipes.filter(recipe => {
      return (
        recipe.name.toLowerCase().includes(searchfield.toLowerCase()) &&
        (sortdifficulty === "0" || recipe.Difficulty === sortdifficulty)
        && (sorttime === "0" || recipe.Time <= sorttime)
      )})
    );
    if(globalrecipes.length === 0){return <h2>Loading...</h2>}
    else {
      return (
        <div className="tc">
          <h1 className="bg-light-gray pa3 shadow-5">LOCAL RECIPE BOOK</h1>


          <SearchBox searchChange={this.onGenericChange} statevar="searchfield"/>
          <DropDown dropChange={this.onGenericChange} statevar="sortdifficulty" options={[
            {val:"0",text:"Any Difficulty"},
            {val:"1",text:"Easy"},
            {val:"2",text:"Medium"},
            {val:"3",text:"Difficult"}]}/>
            <DropDown dropChange={this.onGenericChange} statevar="sorttime" options={[
              {val:"0",text:"Any Duration"},
              {val:"20",text:"< 20 Minutes"},
              {val:"40",text:"< 40 Minutes"},
              {val:"60",text:"<= 60 Minutes"}]}/>
            <AddRecipeButton buttonClick={this.onToggleNewRecipe} submitButtonClick={this.onRecipeSubmit}
                onInputChange={this.onGenericChange} status={status}/>
              <Scroll>
                <ErrorBoundary>
                  <CardList recipes={filteredRecipes}/>
                </ErrorBoundary>
              </Scroll>
              </div>
            );
          }
        }
      }

      export default App;
