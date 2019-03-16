import React, { Component } from "react";
import "./SignUp.css"
import SignUpForm from "../../components/SignUpForm";

class SignUp extends Component {
    state = {
        signUpFormInput: {
            username: "",
            password: "",
            gender: "",
            starter: "",
        }
    }

    handleSignUpFormInputChange = (event) => {
        //Getting the input value
        let inputValue = event.target.value;

        //Getting the input name
        let inputName = event.target.name;

        //Use the name of the input we captured to determine what input gets updated in state
        if (inputName === "username") {
            this.setState(prevState => ({
                signUpFormInput: {
                    ...prevState.signUpFormInput,
                    username: inputValue
                }
            }));
        } else if (inputName === "password") {
            this.setState(prevState => ({
                signUpFormInput: {
                    ...prevState.signUpFormInput,
                    password: inputValue
                }
            }));
        } else if (inputName === "gender") {
            this.setState(prevState => ({
                signUpFormInput: {
                    ...prevState.signUpFormInput,
                    gender: inputValue,
                }
            }));
        } else if (inputName === "starter") {
            this.setState(prevState => ({
                signUpFormInput: {
                    ...prevState.signUpFormInput,
                    starter: inputValue,
                }
            }));
        }
    }

    handleSignUpFormSubmit = (event) => {
        event.preventDefault();
        //Print the sign in credentials of the user
        console.log(`
        ------------------------------
        User Signed Up Successfully!
        ------------------------------
        Account Info:

        Username: ${this.state.signUpFormInput.username}
        Password: ${this.state.signUpFormInput.password}
        Gender: ${this.state.signUpFormInput.gender}
        Starter Pokemon: ${this.state.signUpFormInput.starter}
        ------------------------------
        `)
        // Clear the form input
        this.setState({
            signUpFormInput: {
                username: "",
                password: "",
                gender: "",
                starter: "",
            }
        })
    }

    render () {
        return(
            <div className="SignUp">
                <h1>This is the Sign Up Page.</h1>
                <SignUpForm handleSignUpFormInputChange={this.handleSignUpFormInputChange} handleSignUpFormSubmit={this.handleSignUpFormSubmit} usernameInput={this.state.signUpFormInput.username} passwordInput={this.state.signUpFormInput.password} genderInput={this.state.signUpFormInput.gender} starterInput={this.state.signUpFormInput.starter} />
            </div>
        )
    }
}

export default SignUp;