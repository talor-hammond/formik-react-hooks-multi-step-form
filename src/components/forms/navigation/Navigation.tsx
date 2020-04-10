import React, { useEffect } from "react";
// Components
import { Button } from "@material-ui/core";
// Hooks
import { useFormikContext } from "formik";

type NavigationProps = {
  maxSteps: number;
  currentIndex: number;
  isValid: boolean;
  onClickNext: () => void;
  onClickBack: () => void;
  handleSubmit: () => void;
  isSubmitting: boolean;
};

/** Gotcha: Will need to be a child of a Formik component to have access to Formik context */
const Navigation = ({
  maxSteps,
  currentIndex,
  isValid,
  onClickNext,
  onClickBack,
  isSubmitting,
  handleSubmit
}: NavigationProps) => {
  const isLastStep = currentIndex === maxSteps - 1;
  const { validateForm } = useFormikContext();

  // Will run form.validateForm() when the currentIndex prop is updated :)
  useEffect(() => {
    validateForm();
  }, [currentIndex, validateForm]);

  return (
    <div>
      {isLastStep ? (
        <Button
          disabled={!isValid}
          // isLoading={isSubmitting}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      ) : (
        <Button disabled={!isValid} onClick={onClickNext}>
          Next
        </Button>
      )}

      <Button fullWidth btnStyle="transparent" onClick={onClickBack}>
        Back
      </Button>
    </div>
  );
};

export default Navigation;
