import React from 'react'
import RecipeCard from './RecipeCard'

class RecipeContainer extends React.Component{


    render(){
        
        return (
            <div>
                <button onClick={() => this.props.handleClick(this.props.display && this.props.userRecipe.map(userdata => <RecipeCard userdata={userdata} key={userdata.id}/>))}>This is all the Recipes</button>
            </div>
        )
    }
}

export default RecipeContainer