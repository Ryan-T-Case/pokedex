import React, { Component } from "react";
import "./SignIn.css"
import SignInForm from "../../components/SignInForm";

class SignIn extends Component {
    state = {
        signInFormInput: {
            username: "",
            password: ""
        }
    }

    handleSignInFormInputChange = (event) => {
        //Getting the input value
        let inputValue = event.target.value;

        //Getting the input name
        let inputName = event.target.name;

        //Use the name of the input we captured to determine what input gets updated in state
        if (inputName === "username") {
            this.setState(prevState => ({
                signInFormInput: {
                    ...prevState.signInFormInput,
                    username: inputValue
                }
            }));
        } else if (inputName === "password") {
            this.setState(prevState => ({
                signInFormInput: {
                    ...prevState.signInFormInput,
                    password: inputValue
                }
            }));
        }

    }

    handleSignInFormSubmit = (event) => {
        event.preventDefault();
        //Print the sign in credentials of the user
        console.log(`
        User Signed In Successfully!
        Username: ${this.state.signInFormInput.username}
        Password: ${this.state.signInFormInput.password}
        `)
        // Clear the form input
        this.setState({
            signInFormInput: {
                username: "",
                password: ""
            }
        })
    }

    render () {
        return(
            <div className="SignIn">
                <h1>This is the Sign In Page.</h1>
                <SignInForm handleSignInFormInputChange={this.handleSignInFormInputChange} handleSignInFormSubmit={this.handleSignInFormSubmit} usernameInput={this.state.signInFormInput.username} passwordInput={this.state.signInFormInput.password}/>
            </div>
        )
    }
}

export default SignIn;