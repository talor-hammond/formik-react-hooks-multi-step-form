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
  validationSchema: Yup.Schema<...>;
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

# The multi-step form: `Questionnaire.tsx`

* Call `generateSteps`, `generateInitialValues`, and instantiate a `currentIndex` to keep track of what step in the form the user is up to:

```tsx
const Questionnaire = () => {
  const [steps] = useState(generateSteps());
  const [initialValues] = useState(generateInitialValues(steps));
  const [currentIndex, setCurrentIndex] = useState(0);
  ...
```

We will also define:
`goNext` & `goBack`
  * Use to update `currentIndex`. We will pass this to our `Navigation` component

`renderCurrentStep`
  ```tsx
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
  ```

`handleSubmitQuestionnaire`
  * Define our submit-handler. Typical use-cases might be to hit an API and then re-direct...
    ```tsx
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
    ```
# `Navigation.tsx`

Our `Navigation` component will take advantage of the `useFormikContext` hook: it will expose all of the parent form's props.
It lets you validate and handle-submission without the need for prop drilling.

```tsx
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
```

# Summary

Well, that's pretty much the bones of it... multiple-steps on one page, values, validation, and more. The rest is entirely up to you and your use case :)



