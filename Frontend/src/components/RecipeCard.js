import React, { Component } from 'react'

export default class RecipeCard extends Component {
    render() {
        let {name, ingredients, description, image, video} = this.props.userdata.recipe

        return (
            <div>
               <h1>{name}</h1>
                <h2>{ingredients}</h2>
                <h2>{description}</h2>
                <h2>{image}</h2>
                <h2>{video}</h2>
            </div>
        )
    }
}
