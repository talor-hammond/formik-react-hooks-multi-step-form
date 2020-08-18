# Setup

We'll need a way of determining an array of `Step` -- this is entirely up to you.

Each `Step` will have this shape:

```tsx
type Step = {
  /** Identifies the name of the step & key in initialValues
   * Can use an 'id' here, doesn't necessarily have to be a 'name' prop.
   */
  name: string;
  component: React.ElementType;
  validationSchema: Yup.Schema<any>;
};
```

It is important that each one has a `component` and `validationSchema` prop.
The reference to the component will be used to determine which "step" is rendered; the `validationSchema` will be used to run validation against each step independently.

## Dynamic steps-array via `generateSteps`

In some cases, you might be provided information from an API that will tell you whether a user won't see *all* the available steps:

```tsx
export const generateSteps = (hasAlreadyDoneXStep: boolean): Step[] => {
  // Depending on the type of user, and the requirements for the form that are needed -- you can perform filtering logic here to omit steps that aren't
  // necessary for each case
  let steps = baseSteps;

  if (hasAlreadyDoneXStep) {
      steps = baseSteps.filter... // something like that, it's up to you...
  }
    
  return steps;
};
```

## Dynamic `initialValues`

```tsx
export const generateInitialValues = (filteredSteps: Step[]) => {
  // These initial values are assumed to be `null`.
  // In more complex cases you may want to populate these values w/ data from an API, so you could do what you need to do in here
  const initialValues = filteredSteps.reduce((values, step) => {
    return { ...values, [step.name]: null };
  }, {});

  return initialValues;
};
```

The above arrow-function also gives you an opportunity to pre-populate `initialValues` if you've saved that information somewhere.

## Getting `validationSchema` for a given step

```tsx
export const getStepSchema = (currentIndex: number, steps: Step[]) => {
  return steps[currentIndex].validationSchema;
};
```

**See `src/pages/questionnaire/steps/index.ts` for a reference to the above code**