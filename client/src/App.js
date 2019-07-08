import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from './components/Navigation/';
import Foodform from './components/Foodform';
import Feed from './pages/Feed';
// import DishIt from './pages/DishIt/';
// import EditProfileForm from './components/EditProfileForm';
import { PostData } from "./components/Login/services/PostData";
import TestUpload from './components/testUpload/';
import API from './utils/API';

// import Login from "../Login/Login";
// import Logout from "../Login/Logout";


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        redirectToReferrer: false,
        user:""
        
    }
    this.signup = this.signup.bind(this);
}
signup(res, type) {
    let postData;
    if (type === 'google' && res.w3.U3) {
        postData = { name: res.profileObj.name, provider: type, email: res.profileObj.email, id: res.profileObj.googleId, image: res.profileObj.imageUrl, token: res.tokenId };
        console.log(postData);
        this.setState({user: postData.name})
    }
    PostData('signup', postData).then((result) => {
        let responseJson = result;
        if (responseJson.userData) {

            sessionStorage.setItem('userData', JSON.stringify(responseJson));
            this.setState({ redirectToReferrer: true });
        }
    })
}

loadDishes = () => {
  API.getDishes()
    .then(res =>
      this.setState({dishes: res.data})
    )
    .catch(err => console.log(err));

    console.log()
};
  render(){
    return (
      <div className="App">
        <Navigation 
        user = {this.state.user}
        signup = {this.signup}
        />

        <div className="submitDish">
          <Foodform 
          user = {this.state.user}
          loadDishes = {this.loadDishes}/>
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
