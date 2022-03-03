import React, { Component } from "react";
<<<<<<< HEAD
import { BrowserRouter as Route } from "react-router-dom";

import { Auth, Home } from "./pages";
class App extends Component {
  render() {
    return (
      <div className="wrapper">
        {/* <Route exact path={["/", "/login"]} />
        <Auth /> */}
        <Route exact path="/im " component={<Home />} />
=======
import { Route } from "react-router-dom";

import { Auth, Home } from "./pages";
class App extends  Component {
  render() {
    return (
      <div className="wrapper">
        <Route exact path="/login" component={Auth} />
        <Auth />
        <Route exact path="/im " component={Home} />
>>>>>>> origin/developer
        <Home />
      </div>
    );
  }
}

<<<<<<< HEAD
export default App;
=======
export default App; 
>>>>>>> origin/developer
