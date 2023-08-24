import React, {useState} from "react";
import ReactDOM from "react-dom";


const Child = ({setIsLoggedIn}) => {

    function onSubmit(e){
        e.preventDefault();
        setIsLoggedIn(true)
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <label>Username:</label>
                <input type = "text"/><br/>

                <label>Password:</label>
                <input type="password"/><br/>

                <button>Login</button>
            </form>
        </div>
    )
}

export default Child;