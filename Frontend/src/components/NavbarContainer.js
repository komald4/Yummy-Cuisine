import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

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
