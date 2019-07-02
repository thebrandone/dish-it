import React from "react";
import './style.css';
// import StarRatingComponent from 'react-star-rating-component'; Info can be found
// at https://www.npmjs.com/package/react-star-rating-component

class Foodform extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        img: '',
        description: '',
        // rating:'',
        location:'',
      };
      this.input = React.createRef();
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange = event => {
    const {name, value } = event.target;
    
    this.setState ({
      [name]:value
    });
  };
  
    handleSubmit = event => {
      event.preventDefault();
      alert('A name was submitted: ' + this.state.name);
     this.setState({
        name: '',
        image: '',
        description: '',
        // rating:'',
        location:'',
      });
    };

    onStarClick(nextValue, prevValue, name) {
      this.setState({rating: nextValue});
    }
  
    render() {
      // const { rating } = this.state;
      return (
        
        <form onSubmit={this.handleSubmit}>
          <label>
            Name of dish:
            <input name="name" type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
          Upload Image:
          <input name="img" type="file" ref={this.fileInput} />
        </label>
        <label>
          Describe the dish:
          <textarea name="description" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Location:
          <textarea name="location" value={this.state.value} onChange={this.handleChange} />
        </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }


  export default Foodform;