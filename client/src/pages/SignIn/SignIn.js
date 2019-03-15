import React from "react";
import "./SignIn.css"
import SignInForm from "../../components/SignInForm";

const SignIn = () => {
    return(
        <div className="SignIn">
            <h1>This is the Sign In Page.</h1>
            <SignInForm />
        </div>
    )
}

export default SignIn;