import React, { useState } from "react";

import { hidePass } from "../../utilities/hidePassword";

import "./Login.css"

export const Login = () => {

    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");

    const getUsername = (e) => {
        setUsername(e.target.value);
        return username;
    }

    const getPassword = (e) => {
        setPass(e.target.value);
        return pass;
    }

    const onLogin = (e) => {
        e.preventDefault();
        let alertText = `
        Username: ${username}
        Password: ${hidePass(pass)}
        `;
        alert(alertText);
    }

    const onReset = () => {
        setUsername("");
        setPass("");
    }



    return (
        <div className="login-container">
            <h1>Login</h1>
            <form method="get">
                <input type="text" placeholder="username" onChange={getUsername} value={username} />
                <input type="password" placeholder="password" onChange={getPassword} value={hidePass(pass)}/>
                <button type="Submit" id="login-button" onClick={onLogin}>login</button>
                <button type="Submit" id="reset-button" onClick={onReset}>reset</button>
            </form>
        </div>
    )
}