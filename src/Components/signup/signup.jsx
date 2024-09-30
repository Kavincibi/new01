import React from "react";
import './signup.scss';

function Signin() {
    return(
        <div className="cointainer">
            <div className="content">
                <h1>Sign up</h1>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="password" required/>
                <input type="text" placeholder="Firstname" required/>
                <input type="text" placeholder="Lastname" required />
                <button type="submit"> signup </button>
                <p>already have a account <a href="#">login</a></p>

            </div>
        </div>
    );
}


export default Signin