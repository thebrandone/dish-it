import React from "react";
import { Navbar, Nav, Form, Button, NavDropdown } from 'react-bootstrap';
import './style.css';

function Navigation() {
    return (
        <Navbar bg="orange" fixed='top' expand="sm">
            <Navbar.Brand href="#home">Dish-it!</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">My Profile</Nav.Link>
                    <NavDropdown title="Discover" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Dishes</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Locations</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Friends</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Dish-it! Team</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <Button variant="outline-danger">Login</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;