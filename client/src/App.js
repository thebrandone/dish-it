import React from 'react';
import './App.css';
import Navigation from './components/Navigation/';
import Foodform from './components/Foodform';
import Feed from './pages/Feed';
import EditProfileForm from './components/EditProfileForm';
import { PostData } from "./components/Login/services/PostData";
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
  render(){
    return (
      <div className="App">
        <Navigation 
        user = {this.state.user}
        signup = {this.signup}
        />

        <div className="submitDish">
          <Foodform />
        </div>

        <div className='feedWrapper'>
          <Feed />
        </div>

      </div>
    );
  }
}

export default App;
