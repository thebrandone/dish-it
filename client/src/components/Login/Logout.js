import React from 'react';
import { GoogleLogout } from 'react-google-login';

function Logout(props) {
    return (
        <div>
            <GoogleLogout
                buttonText="Logout"
                onLogoutSuccess={props.logout}
            >Logout</GoogleLogout>
        </div >
    );
}
export default Logout;
