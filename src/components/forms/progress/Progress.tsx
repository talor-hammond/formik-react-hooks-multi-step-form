import React from "react";

type ProgressStepperProps = {
  steps: [];
  currentIndex: number;
};

const ProgressStepper = ({ steps, currentIndex }: ProgressStepperProps) => {
  const maxSteps = steps.length - 1;

  return (
    <div>
      Question
      <span> {currentIndex + 1} </span>
      of {maxSteps}
    </div>
  );
};

export default ProgressStepper;
