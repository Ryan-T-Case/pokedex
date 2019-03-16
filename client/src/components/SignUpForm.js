import React from "react";


const SignUpForm = (props) => {
    return(
        <div className="SignUpForm">
            <form onSubmit={props.handleSignUpFormSubmit}>
                <label htmlFor="username">Let's begin with your name. What is it?</label>
                <input type="text" name="username" placeholder="Create a unique username" value={props.usernameInput} onChange={props.handleSignUpFormInputChange}></input>
                <br></br>
                <label htmlFor="password">Password</label>
                <input type="text" name="password" placeholder="Create a unique password" value={props.passwordInput} onChange={props.handleSignUpFormInputChange}></input>
                <br></br>
                <label htmlFor="gender">Are you a Boy or a Girl?</label>
                <input type="radio" name="gender" value="Boy" checked={props.genderInput === 'Boy'} onChange={props.handleSignUpFormInputChange}></input><span>Boy</span>
                <input type="radio" name="gender" value="Girl" checked={props.genderInput === 'Girl'} onChange={props.handleSignUpFormInputChange}></input><span>Girl</span>
                <br></br>
                <label htmlFor="starter">Now, which starter Pokemon do you want?</label>
                <input type="radio" name="starter" value="Bulbasaur" checked={props.starterInput === 'Bulbasaur'} onChange={props.handleSignUpFormInputChange}></input><span>Bulbasaur</span>
                <input type="radio" name="starter" value="Charmander" checked={props.starterInput === 'Charmander'} onChange={props.handleSignUpFormInputChange}></input><span>Charmander</span>
                <input type="radio" name="starter" value="Squirtle" checked={props.starterInput === 'Squirtle'} onChange={props.handleSignUpFormInputChange}></input><span>Squirtle</span>
                <br></br>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default SignUpForm;