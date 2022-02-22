import React, { Component } from "react";
import { Auth, Home } from "./pages";
class App extends Component {
  render() {
    return (
    <div className="wrapper">
      <Auth />
    </div>
    );
  }
}

export default App;