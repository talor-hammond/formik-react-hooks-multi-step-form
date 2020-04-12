import React from "react";

type ProgressStepperProps = {
  steps: any[];
  currentIndex: number;
};

const ProgressStepper = ({ steps, currentIndex }: ProgressStepperProps) => {
  const maxSteps = steps.length;

  return (
    <div>
      Question
      <span> {currentIndex + 1} </span>
      of {maxSteps}
    </div>
  );
};

export default ProgressStepper;
