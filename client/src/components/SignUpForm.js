import React from "react";


const SignUpForm = () => {
    return(
        <div className="SignUpForm">
            <form>
                <label htmlFor="username">Let's begin with your name. What is it?</label>
                <input type="text" name="username" placeholder="Create a unique username"></input>
                <br></br>
                <label htmlFor="password">Password</label>
                <input type="text" name="password" placeholder="Create a unique password"></input>
                <br></br>
                <label htmlFor="gender">Are you a Boy or a Girl?</label>
                <input type="radio" name="gender" value="Boy"></input><span>Boy</span>
                <input type="radio" name="gender" value="Girl"></input><span>Girl</span>
                <br></br>
                <label htmlFor="starter">Now, which starter Pokemon do you want?</label>
                <input type="radio" name="starter" value="Bulbasaur"></input><span>Bulbasaur</span>
                <input type="radio" name="starter" value="Charmander"></input><span>Charmander</span>
                <input type="radio" name="starter" value="Squirtle"></input><span>Squirtle</span>
                <br></br>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default SignUpForm;