import React from "react";
import { Navbar, Nav, Form, Button, NavDropdown } from 'react-bootstrap';
import './style.css';
import Foodform from '../Foodform';
import EditProfileForm from "../EditProfileForm";
import { PostData } from "../Login/services/PostData";
import Login from "../Login/Login";
import Logout from "../Login/Logout";
class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inLoggedIn: false,
        }
    }
    render(props) {
        const responseGoogle = (response) => {
            console.log(response);
            this.props.signup(response, 'google')
            this.setState({ isloggedIn: true });
        }
        const logout = response => {
            console.log(response)
            sessionStorage.setItem("userData", '');
            sessionStorage.clear();
            this.setState({ redirect: true });
            alert("You have signed out")
            this.setState({ isloggedIn: false })
        }
        if (!this.state.isloggedIn) {
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
                            <Login
                                signup={this.signup}
                                responseGoogle={responseGoogle}
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
                            Welcome {this.props.user}
                            <Logout
                                logout={logout}
                            />
                        </Form>
                    </Navbar.Collapse>
                </Navbar>

            )
        }
    }
}

export default Navigation;