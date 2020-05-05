import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';


export default class RecipeCard extends Component {
    render() {
        let {name, image} = this.props.userdata.recipe

        return (
        <Card className='col-sm-6'style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image}/>
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            </Card.Body>
        </Card>
        )
    }
}
