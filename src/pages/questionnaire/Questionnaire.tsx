import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// Components
import { Formik, FormikProps, FormikValues } from "formik";
import Navigation from "components/forms/navigation/Navigation";
import Progress from "components/forms/progress/Progress";
// Util
import { generateSteps, generateInitialValues, getStepSchema } from "./steps";

const Questionnaire = () => {
  const [steps] = useState(generateSteps());
  const [initialValues] = useState(generateInitialValues(steps));
  const [currentIndex, setCurrentIndex] = useState(0);
  const history = useHistory();

  const goNext = () => {
    setCurrentIndex((oldIndex) => oldIndex + 1);
  };

  const goBack = () => {
    setCurrentIndex((oldIndex) => oldIndex - 1);
  };

  const renderCurrentStep = (form: FormikProps<FormikValues>) => {
    const step = steps[currentIndex];

    // opportunity to extend commonProps here with other relevant information
    const commonProps = {
      name: step.name,
      form,
    };

    const StepComponent = step.component;

    return <StepComponent {...commonProps} />;
  };

  const handleSubmitQuestionnaire = (values: FormikValues) => {
    // Opportunity to perform API call here
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    }).then(() => {
      history.push(`/questionnaire/results`, { values });
    });
  };

  return (
    <>
      <Progress steps={steps} currentIndex={currentIndex} />

      <Formik
        initialValues={initialValues}
        validationSchema={getStepSchema(currentIndex, steps)}
        onSubmit={handleSubmitQuestionnaire}
        validateOnMount
      >
        {(form) => {
          return (
            <>
              {renderCurrentStep(form)}

              <Navigation
                maxSteps={steps.length}
                currentIndex={currentIndex}
                onClickNext={goNext}
                onClickBack={goBack}
              />
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default Questionnaire;
