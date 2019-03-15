import React from "react";


const SignInForm = () => {
    return(
        <div className="SignInForm">
            <h2>Welcome Back, Trainer!</h2>
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" name="username"></input>
                <br></br>
                <label htmlFor="password">Password</label>
                <input type="text" name="password"></input>
                <br></br>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default SignInForm;