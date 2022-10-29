import React from "react";

import { Switch, Route } from "react-router-dom";

import Work from "./pages/Work";
import About from "./pages/about";
import Resume from "./pages/resume";





const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Work />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/resume">
        <Resume />
      </Route>
    </Switch>
  );
};

export default App;
