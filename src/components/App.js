import React from "react";
import Home from "./Home";
import Header from "./Header";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <h1 className="top">Machine Test - Nimap</h1>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route exact path="/login" component={Login} />
      </Switch>
      <Home />
    </div>
  );
}

export default App;
