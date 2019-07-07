import React from 'react';
import GoogleLogin from 'react-google-login';



function Login(props) {

    return (
        <div className="App">
            <GoogleLogin
                clientId="168994870718-3gh0brq2643dou1ltni7pl56b56f0s8f.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={props.responseGoogle}
                onFailure={props.responseGoogle}
                cookiePolicy={'single_host_origin'}

            />
        </div>
    )
}

export default Login;