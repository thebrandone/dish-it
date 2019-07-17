import React, { Component } from "react";
import ProfilePostCard from "../components/ProfilePostCard";
import API from "../utils/API";
import { Container, Jumbotron } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import './style.css';

class Profile extends Component {
  // Setting our component's initial state
  constructor(props) {
    super(props);
    this.state = {
      dishes: [],
      rating: 0,
      user: sessionStorage.getItem("email"),
      isloggedIn: props.isloggedIn
    };
  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser = () => {
    API.findByUser(this.state.user)
    .then(res =>
      this.setState({ dishes: res.data })
    )
    .catch(err => console.log(err.response.data));
  }
  
  loadDishes = () => {
    API.getDishes()
      .then(res =>

        this.setState({ dishes: Array.from(res.data) })

      )
      .catch(err => console.log(err));
    //var newData = this.state.data.concat([data]); 
  };
  renderStars = (rating) => {

    switch (rating) {
      case "1": {
        return "⭐✩✩✩✩✩✩✩✩✩ 1/10";
      }
      case 2: {
        return "⭐⭐✩✩✩✩✩✩✩✩ 2/10";
      }
      case 3: {
        return "⭐⭐⭐✩✩✩✩✩✩✩ 3/10";
      }
      case 4: {
        return "⭐⭐⭐⭐✩✩✩✩✩✩ 4/10";
      }
      case 5: {
        return "⭐⭐⭐⭐⭐✩✩✩✩✩ 5/10";
      }
      case 6: {
        return "⭐⭐⭐⭐⭐⭐✩✩✩✩ 6/10";
      }
      case 7: {
        return "⭐⭐⭐⭐⭐⭐⭐✩✩✩ 7/10";
      }
      case 8: {
        return "⭐⭐⭐⭐⭐⭐⭐⭐✩✩ 8/10";
      }
      case 9: {
        return "⭐⭐⭐⭐⭐⭐⭐⭐⭐✩ 9/10";
      }
      case 10: {
        return "⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 10/10";
      }
      default: {
        this.setState.rating = "No Rating";
        break;
      }
    }
  };

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

  dishDelete = id => {
    API.deleteDish(id).then(() => this.loadUser());
  };

  render() {
    return (
      <Container className="bioDiv">

        <Jumbotron className="profileCard">
          <Image src={sessionStorage.getItem('pic')} className='profileImage' roundedCircle />

          <h1>{sessionStorage.getItem('name')}</h1>
          
          <h3 >Your Dish-it History</h3>
        
          {this.state.dishes.map(dish => {
            return (
              <ProfilePostCard key={dish._id}
                id={dish._id}
                name={dish.name}
                description={dish.description}
                image={dish.image}
                address={dish.address.substr(0,dish.address.indexOf(','))}
                date={dish.date}
                rating={dish.rating}
                renderStars={this.renderStars}
                renderStarIcon={dish.renderStarIcon}
                dishDelete={this.dishDelete}
              />
            )
          })}
      
        </Jumbotron>
      </Container>
    )
  }
}

export default Profile;