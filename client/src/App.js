import React, { Component } from "react";
// Import React Router Dependency
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Import Page Components to be handled by React Router
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import PokedexMain from "./pages/PokedexMain/PokedexMain";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/signup" component={SignUp}></Route>
            <Route exact path="/signin" component={SignIn}></Route>
            <Route exact path="/pokedex-main-dashboard" component={PokedexMain}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
