import React from "react";
import './style.css';
import StarRatingComponent from 'react-star-rating-component';
import Modal from 'react-bootstrap/Modal'
import DatePicker from "react-datepicker";
import { Button } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import API from '../../utils/API.js';
import axios from 'axios';


class Foodform extends React.Component {
  constructor(props, context, date) {
    super(props);
    this.state = {
      user: '',
      name: '',
      img: '',
      description: '',
      location: '',
      rating: 0,
      show: false,
      date: '',
      file: null,
      dishes: []
    };
    this.props=props;
    this.input = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    //this.loadDishes();
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });

  };

  handleSubmit = event => {
    event.preventDefault();
    alert(`name ${this.state.name} <br> Image: ${this.state.img} description: ${this.state.description} I give this ${this.state.rating} stars. location: ${this.state.location} Date: ${this.state.startDate}`);
    
    this.setState({
      name: this.state.name,
      img: this.state.img,
      description: this.state.description,
      location: this.state.location,
      rating: this.state.rating,
      date: this.state.date
    });
    this.handleFormSubmit();
    this.handleClose();
    // AWS
    const formData = new FormData();
    formData.append('file', this.state.file[0]);
    axios.post(`/test-upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  };

  // MORE AWS
  handleFileUpload = (event) => {
    this.setState({ file: event.target.files });
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  handleDateChange = date => {
    this.setState({
      startDate: this.state.date
    });
    return date;
  }

  handleDateChange = date => {
    this.setState({
      startDate: date
    });
    return date;
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  // loadDishes = () => {
  //   API.getDishes()
  //     .then(res =>
  //       this.setState({dishes: res.data})
  //     )
  //     .catch(err => console.log(err));

  //     console.log()
  // };

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
    // event.preventDefault();
    if (this.state.name && this.state.description) {

      API.saveDish({
        user: this.state.user,
        name: this.state.name,
        description: this.state.description,
        location: this.state.location,
        rating: this.state.rating,
        date: this.state.startDate
      })
        .then(res => console.log(this.state))
        .then(this.props.loadDishes)
        .catch(err => console.log(err));
    }
  };

  render() {
    // const { rating } = this.state;
    return (

      <div className="dishForm">
        <Button className="dish-btn" variant="outline-danger" onClick={this.handleShow}>
          Post Dish!

        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Submit a Dish!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSubmit}>
              <label>
                Name of dish:
              <input name="name" type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <label>
                Upload Image:
            <input name="img" type="file" ref={this.fileInput} onChange={this.handleFileUpload} />
              </label>
              <label>
                Describe the dish:
            <textarea name="description" value={this.state.value} onChange={this.handleChange} />

              </label>
              <StarRatingComponent
                starCount={10}
                value={this.state.rating}
                onStarClick={this.onStarClick.bind(this)}
              />
              <label>
                Location:
            <input type="text" name="location" value={this.state.value} onChange={this.handleChange} />
              </label>
              <label> Date Devoured
          <DatePicker
                  name="date"
                  placeholderText={""}
                  todayButton={"Today"}
                  selected={this.state.startDate}
                  onChange={this.handleDateChange}
                />
              </label>

            </form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button type="submit" value="Submit" variant="primary" onClick={this.handleSubmit}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
  }
}

export default Foodform;