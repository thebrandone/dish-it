import React, { Component } from "react";
import PostCard from "../../components/PostCard";
import API from "../../utils/API";
import { Container } from "react-bootstrap";
// import { Input, TextArea, FormBtn } from "../../components/Form";
// import Jumbotron from "../../components/Jumbotron";
// import DeleteBtn from "../../components/DeleteBtn";



class Feed extends Component {
  // Setting our component's initial state

  state = {
    dishes: [],
    rating: 0
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.loadDishes();
  }

  // Loads all books  and sets them to this.state.books
  loadDishes = () => {
    API.getDishes()
      .then(res =>
        this.setState({ dishes: res.data })
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db

  deleteDish = id => {
    API.deleteDish(id)
      .then(res => this.loadDishes())
      .catch(err => console.log(err));
  };

  renderStars = (rating) => {
    console.log(rating);

    switch (rating) {
      case "1": {
        return "⭐✩✩✩✩✩✩✩✩✩";
      }
      case 2: {
        return "⭐⭐✩✩✩✩✩✩✩✩";       
      }
      case 3: {
        return "⭐⭐⭐✩✩✩✩✩✩✩";
      }
      case 4: {
        return "⭐⭐⭐⭐✩✩✩✩✩✩";
      }
      case 5: {
        return "⭐⭐⭐⭐⭐✩✩✩✩✩";
      }
      case 6: {
        return "⭐⭐⭐⭐⭐⭐✩✩✩✩";
      }
      case 7: {
        return "⭐⭐⭐⭐⭐⭐⭐✩✩✩";
      }
      case 8: {
        return "⭐⭐⭐⭐⭐⭐⭐⭐✩✩";
      }
      case 9: {
        return "⭐⭐⭐⭐⭐⭐⭐⭐⭐✩";
      }
      case 10: {
        return "⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐";
      }
      default: {
        this.setState.rating = "No Rating";
        break;
      }
    }
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
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
      <Container fluid>
        {this.state.dishes.length ? (
          <Container>
            {this.state.dishes.map(dish => {
              return (
                <PostCard key={dish._id}
                  name={dish.name}
                  description={dish.description}
                  location={dish.location}
                  date={dish.date}
                  rating={dish.rating}
                  renderStars={this.renderStars}
                  renderStarIcon={dish.renderStarIcon}>
                </PostCard>
              );
            })}
          </Container>
        ) : (
            <h3>No Results to Display</h3>
          )}
      </Container>
    );
  }
}

export default Feed;
