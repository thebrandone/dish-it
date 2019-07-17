import React from "react";
import { Navbar, Nav, Form } from 'react-bootstrap';
import './style.css';
// import Foodform from '../Foodform';
// import EditProfileForm from "../EditProfileForm";
// import { PostData } from "../Login/services/PostData";
import Login from "../Login/Login";
import Logout from "../Login/Logout";
function Navigation (props) {
console.log(props.isloggedIn)
    if (!props.isloggedIn) {
        return (
            <Navbar bg="orange" fixed='top' expand="sm">
                <Navbar.Brand href="#home">Dish-it!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/profile">My Profile</Nav.Link>
                        <Nav.Link href="/search">Discover</Nav.Link>
                        <Nav.Link href="/dish-team">Dish-it Team</Nav.Link>
                    </Nav>
                    <Form inline>
                        <Login
                            signup={props.signup}
                            responseGoogle={props.responseGoogle}
                        />
                    </Form>
                </Navbar.Collapse>
            </Navbar>

        )
    }
    else {
        return (
            <Navbar bg="orange" fixed='top' expand="sm">
                <Navbar.Brand href="#home">Dish-it!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/profile">My Profile</Nav.Link>
                        <Nav.Link href="/search">Discover</Nav.Link>
                        <Nav.Link href="/dish-team">Dish-it Team</Nav.Link>
                    </Nav>

                    {props.name}

                    <Form inline>

                        <Logout
                            logout={props.logout}
                        />
                    </Form>
                </Navbar.Collapse>
            </Navbar>

        )
    }
}


export default Navigation;