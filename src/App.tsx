import React from "react";
// Components
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import CoreLayout from "components/coreLayout/CoreLayout";
// Pages
import Questionnaire from "pages/questionnaire/Questionnaire";
import QuestionnaireResults from "pages/questionnaireResults/QuestionnaireResults";

const App = () => {
  return (
    <Router>
      <Header />
      <CoreLayout>
        <Switch>
          <Route exact path="/questionnaire">
            <Questionnaire />
          </Route>
          <Route exact path="/questionnaire/results">
            <QuestionnaireResults />
          </Route>

          <Route path="*">
            <Redirect to="/questionnaire" />
          </Route>
        </Switch>
      </CoreLayout>
      <Footer />
    </Router>
  );
};

export default App;
