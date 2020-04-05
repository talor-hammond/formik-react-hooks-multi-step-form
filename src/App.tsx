import React from "react";
// Lib
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Pages

const App = () => {
  return (
    <Router>
      {/* TODO: header */}
      <Switch>
        <Route path="/">todo</Route>
        <Route path="/results">todo</Route>
      </Switch>
      {/* TODO: footer */}
    </Router>
  );
};

export default App;
