import React from 'react'
import RecipeCard from './RecipeCard'

class RecipeContainer extends React.Component{


    render(){
        console.log(this.props)
        
        return (
            <div >
                <button onClick={() => this.props.handleClick()}>This is all the Recipes</button>
                {this.props.display && this.props.userRecipe.map(userdata => <RecipeCard userdata={userdata} key={userdata.id}/>)}
            </div>
        )
    }
}

export default RecipeContainer