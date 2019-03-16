import React from "react";


const SignInForm = (props) => {
    return(
        <div className="SignInForm">
            <h2>Welcome Back, Trainer!</h2>
            <form onSubmit={props.handleSignInFormSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={props.usernameInput} onChange={props.handleSignInFormInputChange}></input>
                <br></br>
                <label htmlFor="password">Password</label>
                <input type="text" name="password" value={props.passwordInput} onChange={props.handleSignInFormInputChange}></input>
                <br></br>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default SignInForm;