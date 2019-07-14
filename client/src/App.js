import React from "react";
import Home from "./pages/home"
import Profile from "./pages/profile"
import Search from "./pages/search"
import DishTeam from "./pages/dishTeam"
import Nav from "./components/Navigation"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
<<<<<<< HEAD
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from './components/Navigation/';
import Foodform from './components/Foodform';
import Feed from './pages/Feed';
// import DishIt from './pages/DishIt/';
// import EditProfileForm from './components/EditProfileForm';
import { PostData } from "./components/Login/services/PostData";
import API from './utils/API';
import { Router, Link } from "react-router-dom";

// import Login from "../Login/Login";
// import Logout from "../Login/Logout";


=======

>>>>>>> 210e0b7678e6ca7ed952861b4cbc226ff6812b3b
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
<<<<<<< HEAD
      user: ""

    }
    this.signup = this.signup.bind(this);
  }
  signup(res, type) {
    let postData;
    if (type === 'google' && res.w3.U3) {
      postData = { name: res.profileObj.name, provider: type, email: res.profileObj.email, id: res.profileObj.googleId, image: res.profileObj.imageUrl, token: res.tokenId };
      console.log(postData);
      this.setState({ user: postData.name })
      localStorage.setItem('username', postData.name)
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
        </div>
      </div>
=======
      user: [],
      isloggedIn: false,
      name:""
    }
    this.signup = this.signup.bind(this);
  }
  componentDidMount(){
    this.setState({isloggedIn:sessionStorage.getItem("loggedIn"), name:sessionStorage.getItem("name")})
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
  responseGoogle = (response) => {
    console.log(response);
    console.log(response.w3.ig)
    this.signup(response, 'google')
    this.setState({ isloggedIn: true, name: response.w3.ig });
  }
  logout = response => {
    console.log(response)
    sessionStorage.clear();
    alert("You have signed out")
    this.setState({ isloggedIn: false })
  }

  render() {
    return (
      <Router>
        <div>
          <Nav
            name={this.state.name}
            signup={this.signup}
            responseGoogle={this.responseGoogle}
            logout={this.logout}
            isloggedIn={this.state.isloggedIn} />
          <Switch>
            <Route exact path="/" component={() =>
              <Home
                user={this.state.user}
                isloggedIn={this.state.isloggedIn}
              />} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/search/:id" component={Search} />
            <Route exact path="/dish-team" component={DishTeam} />
          </Switch>
        </div>
      </Router>
>>>>>>> 210e0b7678e6ca7ed952861b4cbc226ff6812b3b
    );
  }
}

export default App;
