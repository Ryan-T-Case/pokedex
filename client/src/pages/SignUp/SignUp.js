import React from "react";
import "./SignUp.css"
import SignUpForm from "../../components/SignUpForm";

const SignUp = () => {
    return(
        <div className="SignUp">
            <h1>This is the Sign Up Page.</h1>
            <SignUpForm />
        </div>
    )
}

export default SignUp;