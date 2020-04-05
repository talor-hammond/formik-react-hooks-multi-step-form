import React from "react";
// Components
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "components/header/Header";
// Pages

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">todo</Route>
        <Route path="/results">todo</Route>
      </Switch>
      {/* TODO: footer */}
    </Router>
  );
};

export default App;
