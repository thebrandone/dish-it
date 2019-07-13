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
      user: []
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
  render() {
    return (
      <Router>
        <div>
          <Nav 
          user={this.state.user}
          signup={this.signup}/>
          <Switch>
            <Route exact path="/" component={() =><Home user={this.state.user}/>} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/search/:id" component={Search} />
            <Route exact path="/dish-team" component={DishTeam} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
