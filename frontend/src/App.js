import React, { useState } from "react";
import "./css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navbar } from "./components/components";

import Homepage from "./pages/homepage";
import Login from "./pages/login";
import Logout from "./pages/logout";
import Profile from "./pages/profile";

import Signup from "./pages/signup";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" exact component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/profile" component={Profile} />
        <Route>
          <div className="container">page not found</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;