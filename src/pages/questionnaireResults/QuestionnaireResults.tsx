import React from "react";
import { useLocation } from "react-router-dom";
import { FormikValues } from "formik";

const QuestionnaireResults = () => {
  const location = useLocation<{ values: FormikValues }>();
  const { values } = location.state;

  return (
    <>
      <pre style={{ textAlign: "left", maxWidth: 300, margin: "0 auto" }}>
        <strong>values</strong> = {JSON.stringify(values, null, 2)}
      </pre>
    </>
  );
};

export default QuestionnaireResults;
