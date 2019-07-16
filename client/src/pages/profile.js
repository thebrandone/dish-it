import React, { Component } from "react";
import PostCard from "../components/PostCard";
import API from "../utils/API";
import { Container, Jumbotron, Button } from "react-bootstrap";
import Foodform from "../components/Foodform"
import Image from 'react-bootstrap/Image'
import './style.css';
// import { Input, TextArea, FormBtn } from "../../components/Form";
// import Jumbotron from "../../components/Jumbotron";
// import DeleteBtn from "../../components/DeleteBtn";

class Profile extends Component {
    // Setting our component's initial state
    constructor(props) {
        super(props);
        this.state = {
            dishes: [],
            rating: 0,
            user: '',
            isloggedIn: props.isloggedIn
        };
    }

    componentDidMount() {

    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.name && this.state.description) {
            API.saveDish({
                name: this.state.name,
                description: this.state.description,
            })
                .then(res => this.loadDishes())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Container className="bioDiv">

                <Jumbotron className="profileCard">
                    <Image src={sessionStorage.getItem('pic')} className='profileImage' roundedCircle />

                    <h1>{sessionStorage.getItem('name')}</h1>
                    <form>

                    </form>
                    
                </Jumbotron>
                Your Dish-it Posts
            </Container>
        )
    }
}

export default Profile;