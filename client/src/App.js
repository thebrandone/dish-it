import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from './components/Navigation/';
import Foodform from './components/Foodform';
import Feed from './pages/Feed';
// import DishIt from './pages/DishIt/';
// import EditProfileForm from './components/EditProfileForm';
// import { PostData } from "./components/Login/services/PostData";
// import TestUpload from './components/testUpload/';
import API from './utils/API';

// import Login from "../Login/Login";
// import Logout from "../Login/Logout";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      user: [],
    }
    this.signup = this.signup.bind(this);
  }

  signup(res, type) {
    let postData;
    if (type === 'google' && res.w3.U3) {
      postData = { name: res.w3.ig, provider: type, email: res.w3.U3, provider_id: res.El, token: res.Zi.access_token, provider_pic: res.w3.Paa };
      this.setState({ user: postData })
    }
    sessionStorage.setItem("name", postData.name);
    sessionStorage.setItem("email", postData.email);
    sessionStorage.setItem("pic", postData.provider_pic);
    sessionStorage.setItem("loggedIn", true)
     
  }

  loadDishes = () => {
    API.getDishes()
      .then(res =>
        this.setState({ dishes: res.data })
      )
      .catch(err => console.log(err));

    console.log()
  };
  render() {
    return (
      <div className="App">
        <Navigation
          user={this.state.user}
          signup={this.signup}
        />

        <div className="submitDish">
          <Foodform
            user={this.state.user}
            loadDishes={this.loadDishes} />
        </div>

        <div className='feedWrapper'>
          <Feed />
          {/* <TestUpload /> */}
        </div>


      </div>
    );
  }
}

export default App;
