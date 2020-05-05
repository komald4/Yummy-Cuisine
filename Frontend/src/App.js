import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarContainer from './components/NavbarContainer'
import FavoriteContainer from './components/FavoriteContainer'
import RecipeContainer from './components/RecipeContainer'
import PopularContainer from './components/PopularContainer'

const Url = 'http://localhost:3000/user_recipes'

class App extends React.Component{
  
  state = {
    userRecipe: [],
    display: false
  }

  componentDidMount(){
    fetch(Url)
    .then(response => response.json())
    .then(data => {
      this.setState({
        userRecipe: data
      })
    })
  }

  handleClick = () => {
    this.setState({
      display: !this.state.display
    })
  }

  render(){
    console.log(this.state.userRecipe)

    return (
      <div className="App">
        <header >
        <NavbarContainer />
        </header>
        <FavoriteContainer />
        <RecipeContainer handleClick={this.handleClick} userRecipe={this.state.userRecipe} display={this.state.display}/>
        <PopularContainer />
      </div>
    );
  }

}

export default App;
