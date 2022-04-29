import React from "react";
import ReactDOM from "react-dom";
import {  BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";


import store from "./redux/store";

import "./scss/app.scss";
import App from "./App";
import GlobalContextProvider from "./HOC/globalContext";

ReactDOM.render(
  <Router>
        <Provider store={store}>
        <GlobalContextProvider>
          <App />
          </GlobalContextProvider>
        </Provider>
  </Router>,
  document.getElementById("root")
);
