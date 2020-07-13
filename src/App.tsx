import React from "react";
// Components
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import CoreLayout from "components/coreLayout/CoreLayout";
// Pages
import Questionnaire from "pages/questionnaire/Questionnaire";
import Results from "pages/results/Results";

const App = () => {
  return (
    <Router>
      <Header />
      <CoreLayout>
        <Switch>
          <Route path="/" component={Questionnaire} exact />
          <Route path="/results" component={Results} />
        </Switch>
      </CoreLayout>
      <Footer />
    </Router>
  );
};

export default App;
