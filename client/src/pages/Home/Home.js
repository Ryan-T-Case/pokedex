import React from "react";
import "./Home.css"

const Home = () => {
    return(
        <div className="Home">
            <h1>This is the Home Page.</h1>
            <br></br>
            <a href="/signup"><button>Sign Up</button></a>
            <a href="/signin"><button>Sign In</button></a>
        </div>
    )
}

export default Home;