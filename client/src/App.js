import React from "react";
import Home from "./pages/home"
import Profile from "./pages/profile"
import Search from "./pages/search"
import DishTeam from "./pages/dishTeam"
import Nav from "./components/Navigation"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      user: [],
      isloggedIn: false,
      name: ""
    }
    this.signup = this.signup.bind(this);
  }
  componentDidMount() {
    this.setState({ isloggedIn: sessionStorage.getItem("loggedIn"), name: sessionStorage.getItem("name") })
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
    // console.log(response);
    // console.log(response.w3.ig)
    this.signup(response, 'google')
    this.setState({ isloggedIn: true, name: response.w3.ig });
  }
  logout = response => {
    // console.log(response)
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
                user={this.state.name}
                isloggedIn={this.state.isloggedIn}
              />} />
            <Route exact path="/profile"
              component={() => <Profile
                user={this.state.name}
                isloggedIn={this.state.isloggedIn}
              />} />
            <Route exact path="/search/:id" component={Search} />
            <Route exact path="/dish-team" component={DishTeam} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
