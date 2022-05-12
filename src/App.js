import React from "react";

import { Header } from "./components";
import { Home, Cart, Login, SignUp, HomePage } from "./pages";
import { BrowserRouter as Router, Route} from "react-router-dom";
import GlobalContextProvider from "./HOC/globalContext";


import {Provider} from 'react-redux';
import store from "./redux/store";

function App() {
  return (
    <Provider store={store} >
      <Router>
        <GlobalContextProvider>
        <div className="wrapper">
          <Header />
          <div className="content">
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={SignUp} exact />
            <Route path="/" component={Home} exact />
            <Route path="/homepage" component={HomePage} exact />
            <Route path="/cart" component={Cart} exact />
          </div>
        </div>
        </GlobalContextProvider>
        </Router>
        </Provider>
  );
  
}

export default App;
