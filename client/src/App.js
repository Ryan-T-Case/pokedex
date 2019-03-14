import React, { Component } from "react";
// Import React Router Dependency
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Import Page Components to be handled by React Router
import Home from "./pages/Home/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
