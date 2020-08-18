import React, { useEffect } from "react";
// Components
import { Button, CircularProgress } from "@material-ui/core";
// Hooks
import { useFormikContext } from "formik";

type NavigationProps = {
  maxSteps: number;
  currentIndex: number;
  onClickNext: () => void;
  onClickBack: () => void;
};

/** Gotcha: Will need to be a child of a Formik component to have access to Formik context */
const Navigation = ({
  maxSteps,
  currentIndex,
  onClickNext,
  onClickBack,
}: NavigationProps) => {
  const isFirstStep = currentIndex === 0;
  const isLastStep = currentIndex === maxSteps - 1;

  // Grab what we need from formik without prop-drilling
  const {
    validateForm,
    handleSubmit,
    isSubmitting,
    isValid,
  } = useFormikContext();

  // Will run form.validateForm() when the currentIndex prop is changed
  useEffect(() => {
    validateForm();
  }, [currentIndex, validateForm]);

  return (
    <div>
      {isLastStep ? (
        <Button disabled={!isValid} onClick={() => handleSubmit()}>
          {isSubmitting ? <CircularProgress size={14} /> : "Submit"}
        </Button>
      ) : (
        <Button disabled={!isValid} onClick={onClickNext}>
          Next
        </Button>
      )}

      {!isFirstStep && <Button onClick={onClickBack}>Back</Button>}
    </div>
  );
};

export default Navigation;
