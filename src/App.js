import React, { Component } from "react";
import { BrowserRouter as Route } from "react-router-dom";

import { Auth, Home } from "./pages";
class App extends Component {
  render() {
    return (
      <div className="wrapper">
        {/* <Route exact path={["/", "/login"]} />
        <Auth /> */}
        <Route exact path="/im " component={<Home />} />
        <Home />
      </div>
    );
  }
}

export default App;
