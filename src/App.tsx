import React from "react";
// Components
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import Questionnaire from "pages/questionnaire/Questionnaire";
// Pages

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Questionnaire} />
        <Route path="/results">todo</Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
