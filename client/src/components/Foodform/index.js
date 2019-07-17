import React from "react";
import './style.css';
import StarRatingComponent from 'react-star-rating-component';
import Modal from 'react-bootstrap/Modal'
import DatePicker from "react-datepicker";
import { Button } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css"
import API from '../../utils/API.js'
import axios from "axios"
import Tags from "../Tags"
// import LocationSearchInput from "../PlacesAutocomplete";
import PlacesAutocomplete from 'react-places-autocomplete'

class Foodform extends React.Component {
  constructor(props, context, date) {
    super(props);
    this.state = {
      user: '',
      name: '',
      img: '',
      description: '',
      tags: [""],
      address: '',
      rating: 0,
      show: false,
      date: '',
      file: null,
      dishes: [],
      isLoggedIn: false
    };
    this.props = props;
    this.input = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount(props) {
    this.setState({ isLoggedIn: this.props.isLoggedIn })
  }


  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });

    this.setState({ user: sessionStorage.getItem("email") })

  };

  handleSubmit = event => {
    event.preventDefault();
    // alert(`name ${this.state.name} <br> Image: ${this.state.img} description: ${this.state.description} I give this ${this.state.rating} stars. address: ${this.state.address} Date: ${this.state.startDate}`);

    this.setState({
      user: this.state.user,
      name: this.state.name,
      img: this.state.img,
      description: this.state.description,
      tags: this.state.tags,
      address: this.state.address,
      rating: this.state.rating,
      date: this.state.date
    });
    // this.handleFormSubmit();
    this.handleClose();

    //AWS

    const formData = new FormData();
    formData.append('file', this.state.file[0]);
    axios.post(`/test-upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      const image = response.data.Location
      API.saveImage({ image: image })
        .then(res => {this.handleFormSubmit(res.data.image) })
        .catch(err => console.log(err.response.data));
    }).catch(error => {
      console.log(error);
    })
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
      startDate: date
    });
    return date;
  }

  handleAddressChange = address => {
    this.setState({
      address
    });

    console.log(address);
  };

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

  // deleteDish = id => {
  //   API.deleteDish(id)
  //     .then(res => this.loadDishes())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = imageid => {
    // event.preventDefault();
    if (!this.state.name || !this.state.description || !this.state.address || !this.state.rating) {
      alert("Please fill out each required section")
      return;
    }
    else
      if (this.state.name && this.state.description) {

        API.saveDish({
          user: this.state.user,
          name: this.state.name,
          image: imageid,
          description: this.state.description,
          address: this.state.address,
          tags: this.state.tags,
          rating: this.state.rating,
          date: this.state.startDate
        })
          // .then(res => console.log(this.state))
          .then(this.props.loadDishes)
          .catch(err => console.log(err));
        window.location.reload()
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
              <div className="formContent">
                <label>
                  *Name of dish:
              <input name="name" type="text" value={this.state.value} onChange={this.handleChange} required />
                </label>

                <label>
                  Upload Image:
            <input name="img" type="file" ref={this.fileInput} onChange={this.handleFileUpload} />
                </label>
                <label>
                  *Describe the dish:
            <textarea name="description" value={this.state.value} onChange={this.handleChange} />

                </label>

                <Tags
                name="tags"
                value={this.state.value}
                onChange={this.handleChange}
                tags={this.state.tags}
                />

                <label>
                  *Rate this dish:
              </label>
                <StarRatingComponent
                  starCount={10}
                  value={this.state.rating}
                  onStarClick={this.onStarClick.bind(this)}
                />
                <label>
                  *Location:
            {/* <input type="text" name="location" value={this.state.value} onChange={this.handleChange} /> */}


                  <PlacesAutocomplete
                    name="address"
                    value={this.state.address}
                    onChange={this.handleAddressChange}
                    // onSelect={this.handleSelect}
                    highlightFirstSuggestion={true}
                  >
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                      <div>
                        <input
                          {...getInputProps({
                            placeholder: 'Search Places ...',
                            className: 'location-search-input',
                          })}
                        />
                        <div className="autocomplete-dropdown-container">
                          {loading && <div>Loading...</div>}
                          {suggestions.map(suggestion => {
                            const className = suggestion.active
                              ? 'suggestion-item--active'
                              : 'suggestion-item';
                            // inline style for demonstration purpose
                            const style = suggestion.active
                              ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                              : { backgroundColor: '#ffffff', cursor: 'pointer' };
                            return (
                              <div
                                {...getSuggestionItemProps(suggestion, {
                                  className,
                                  style,
                                })}
                              >
                                <span>{suggestion.description}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </PlacesAutocomplete>
                </label>

                <label> Date Devoured
          <DatePicker
                    name="date"
                    placeholderText={""}
                    todayButton={"Today"}
                    showTimeSelect
                    selected={this.state.startDate}
                    onChange={this.handleDateChange}
                  />
                </label>
                <span className="required-text">*Required Fields</span>
                </div>
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