import React, {useState} from "react";
import ReactDOM from "react-dom";


const Child = ({setIsLoggedIn}) => {

    return(
        <div>
            <label>Username:</label>
            <input type = "text"/><br/>

            <label>Password:</label>
            <input type="password"/><br/>

            <button onClick = {() => setIsLoggedIn(true)}>Login</button>
        </div>
    )
}

export default Child;