import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

export default class NavbarContainer extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Yummy Cuisine</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link >Home</Nav.Link>
                <Nav.Link >User Profile</Nav.Link>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
                <Nav.Link>Log Out</Nav.Link>
             </Nav>
            </Navbar>
        )
    }
}
