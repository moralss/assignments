import React, { Component } from "react";
import "./App.css";
import Form from "./component/Form";
import Navbar from "./component/Navbar";
import Darshboard from "./component/Darshboard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RegisterLocation from "./component/RegiserLocation";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Navbar />
          <Route
            path="/registerbusiness"
            exact
            strict
            render={props => <Form {...props} />}
          />

          <Route
            path="/darshboard"
            exact
            strict
            render={props => <Darshboard {...props} />}
          />


          <Route
            path="/registerLocation/:name"
            exact
            strict
            render={props => <RegisterLocation {...props} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
