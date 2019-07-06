import React from "react";
import './style.css';
//import StarRatingComponent from 'react-star-rating-component'; 
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'
//Info can be found at https://www.npmjs.com/package/react-star-rating-component

class EditProfileForm extends React.Component {
    constructor(props, context) {
      super(props);
      this.state = {
        name: '',
        avatar: '',
        hometown: '',
        favoriteFood:'',
        show: false
      };
      this.input = React.createRef();
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
    }
  
    handleChange = event => {
    const {name, value } = event.target;
    
    this.setState ({
      [name]:value
    });
  };
  
    handleSubmit = event => {
      event.preventDefault();
      alert(`name ${this.state.name} <br> Image: ${this.state.img} I am from ${this.state.hometown} My favorite foods are: ${this.state.rating}`)
      this.handleClose();

     this.setState({
         name: '',
        avatar: '',
        location: '',
        favoriteFood:'',
      });
    };

    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }

    onStarClick(nextValue, prevValue, name) {
      this.setState({rating: nextValue});
    }
  
    render() {
      // const { rating } = this.state;
      return (
        
        <div class="editProfileForm">
         <Button variant="primary" onClick={this.handleShow}>
           Edit My Profile 
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Dish It!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input name="name" type="text" value={this.state.value} placeholder= "Nickname" onChange={this.handleChange} />
            </label>
            <label>
            Upload Profile Image:
            <input name="avatar" type="file" ref={this.fileInput} />
          </label>
          <label>
            Where are you from?
            <input type="text" name="hometown" placeholder="City, State" value={this.state.value} onChange={this.handleChange} />
          </label>
          <Form.Row>
          <label>
              What are you favorite types of food?
    <div class="input-group-prepend fav-foods">
    <button class="btn btn-outline-secondary" type="button">American</button>
    <button class="btn btn-outline-secondary" type="button">Japanese</button>
    <button class="btn btn-outline-secondary" type="button">Ramen</button>
    <button class="btn btn-outline-secondary" type="button">Thai</button>
    <button class="btn btn-outline-secondary" type="button">Sushi</button>
    <button class="btn btn-outline-secondary" type="button">Salads</button>
    <button class="btn btn-outline-secondary" type="button">Steaks</button>
    <button class="btn btn-outline-secondary" type="button">Wraps</button>
    <button class="btn btn-outline-secondary" type="button">Wings</button>
    <button class="btn btn-outline-secondary" type="button">BBQ</button>
    <button class="btn btn-outline-secondary" type="button">Southern</button>
    <button class="btn btn-outline-secondary" type="button">Spanish</button>
  </div>
         </label>
         </Form.Row>

          </form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button type="submit" value="Submit" variant="primary"  onClick={this.handleSubmit}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
         
        </div>
      );
    }
  }


  export default EditProfileForm;

