import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API.js";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class DishIt extends Component {
  state = {
    dishes: [],
    title: "",
    description: ""
  };

  componentDidMount() {
    this.loadDishes();
  };

  loadDishes = () => {
    API.getDishes()
      .then(res =>
        this.setState({dishes: res.data, title: "", description: ""})
      )
      .catch(err => console.log(err));
  };

  deleteDish = id => {
    API.deleteDish(id)
      .then(res => this.loadDishes())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.description) {
      API.saveDish({
        title: this.state.title,
        description: this.state.description
      })
        .then(res => this.loadDishes())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Dish Submission</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description"
              />
              <FormBtn
                disabled={!(this.state.title && this.state.description)}
                onClick={this.handleFormSubmit}
              >
                Submit Dish
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Dishes</h1>
            </Jumbotron>
            {this.state.dishes.length ? (
              <List>
                {this.state.dishes.map(dishes => (
                  <ListItem key={dishes._id}>
                    {/* <Link to={"/dishes/" + dishes._id}>
                      <strong>
                        {dishes.title} by {dishes.description}
                      </strong>
                    </Link> */}
                    <DeleteBtn onClick={() => this.deleteDish(dishes._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DishIt;
