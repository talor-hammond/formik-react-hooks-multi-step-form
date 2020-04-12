import React, { useState } from "react";
// Components
import { Formik, FormikProps, FormikValues } from "formik";
import { Typography } from "@material-ui/core";
import Navigation from "components/forms/navigation/Navigation";
import Progress from "components/forms/progress/Progress";
// Util
import { generateSteps, generateInitialValues, getStepSchema } from "./steps";

const Questionnaire = () => {
  const [steps] = useState(generateSteps());
  const [initialValues] = useState(generateInitialValues(steps));
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex(oldIndex => oldIndex + 1);
  };

  const goBack = () => {
    setCurrentIndex(oldIndex => oldIndex - 1);
  };

  const renderCurrentStep = (form: FormikProps<FormikValues>) => {
    const step = steps[currentIndex];

    const commonProps = {
      name: step.name,
      form
      // opportunity to extend commonProps here with other relevant information
    };

    const StepComponent = step.component;

    return <StepComponent {...commonProps} />;
  };

  const handleSubmitQuestionnaire = (values: FormikValues, actions: any) => {
    console.log(values);
  };

  return (
    <>
      <Typography>Here's a title</Typography>

      <Progress steps={steps} currentIndex={currentIndex} />

      <Formik
        initialValues={initialValues}
        validationSchema={getStepSchema(currentIndex, steps)}
        onSubmit={handleSubmitQuestionnaire}
        validateOnMount
      >
        {form => {
          return (
            <>
              {renderCurrentStep(form)}

              <Navigation
                maxSteps={steps.length}
                currentIndex={currentIndex}
                isValid={form.isValid}
                onClickNext={goNext}
                onClickBack={goBack}
                handleSubmit={form.handleSubmit}
                isSubmitting={form.isSubmitting}
              />
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default Questionnaire;
