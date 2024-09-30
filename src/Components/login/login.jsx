import React from "react";
import './login.scss';
function Login() {
    return (
        <div className="content">
            <div className="login">
            <h1 id="log">Login</h1>
                <div className="details">
                    <label htmlFor="Id">RegNo : </label>
                    <input type="text" placeholder="RegNo" required className="input"/>
                    <label htmlFor="Id">Name : </label>
                    <input type="text" placeholder="Name" required className="input"/>
                    <label htmlFor="Id">E-mail : </label>
                    <input type="email" placeholder="E-mail" required className="input"/>
                    <label htmlFor="Id">Password : </label>
                    <input type="password" placeholder="Password" required className="input"/>
                </div>
                <div className="submit">
                    <button type="submit"> Submit</button>
                </div>
            </div>
        </div>

    );
}

export default Login