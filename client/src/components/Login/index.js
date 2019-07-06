// import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
// or
// import { GoogleLogin } from 'react-google-login';
import { PostData } from "../Login/services/PostData";
// import {Redirect} from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            inLoggedIn: false
        }
        this.signup = this.signup.bind(this);
    }


    signup(res, type) {
        let postData;
        if (type === 'google' && res.w3.U3) {
            postData = { name: res.profileObj.name, provider: type, email: res.profileObj.email, id: res.profileObj.googleId, image: res.profileObj.imageUrl, token: res.tokenId };
            console.log(postData);
        }
        PostData('signup', postData).then((result) => {
            let responseJson = result;
            if (responseJson.userData) {

                sessionStorage.setItem('userData', JSON.stringify(responseJson));
                this.setState({ redirectToReferrer: true });
            }
        })
    }



    render() {
        // if(this.state.redirectToReferrer){
        //   return(<Redirect to={'/home'}/>)
        // }
        const responseGoogle = (response) => {
            console.log(response);
            this.signup(response, 'google')
            this.setState({ isloggedIn: true });
        }
        const logout = response => {
            console.log(response)
            sessionStorage.setItem("userData", '');
            sessionStorage.clear();
            this.setState({ redirect: true });
            alert("You have signed out")
            this.setState({isloggedIn:false})
        }
        if (!this.state.isloggedIn) {
            return (
                <div className="App">
                    <GoogleLogin
                        clientId="168994870718-3gh0brq2643dou1ltni7pl56b56f0s8f.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
            )
        }
        else {
            return (
                <div>
                    <GoogleLogout
                        buttonText="Logout"
                        onLogoutSuccess={logout}
                    >Logout</GoogleLogout>
                </div >
            );
        }
    }
}

export default Login;