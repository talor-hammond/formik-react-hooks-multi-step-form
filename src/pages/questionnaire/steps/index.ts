// Components & schema
import FirstNameStep from "./firstNameStep/FirstNameStep";
import FirstNameStepSchema from "./firstNameStep/FirstNameStep.schema";
import EmailAddressStep from "./emailAddress/EmailAddressStep";
import EmailAddressSchema from "./emailAddress/EmailAddressStep.schema";

// Other types:
import { FormikValues } from "formik";

export type Step = {
  /** Identifies the name of the step & key in initialValues */
  name: string;
  component: any; // TODO: type these
  validationSchema: any; // TODO
};

/** Considered the maximum possible steps for a user -- optionally perform filtering logic in `generateSteps` if you need to */
const baseSteps: Step[] = [
  {
    name: "firstName",
    component: FirstNameStep,
    validationSchema: FirstNameStepSchema,
  },
  {
    name: "emailAddress",
    component: EmailAddressStep,
    validationSchema: EmailAddressSchema,
  },
  // {
  //   name: "phoneNumber",
  //   component: null,
  //   validationSchema: null,
  // },
];

export const generateSteps = (): Step[] => {
  // Depending on the type of user, and the requirements for the form that are needed -- you can perform filtering logic here to omit steps that aren't
  // necessary for each case
  return baseSteps;
};

export const generateInitialValues = (filteredSteps: Step[]): FormikValues => {
  // These initial values are assumed to be `null`.
  // In more complex cases you may want to populate these values w/ data from an API, so you could do what you need to do in here
  const initialValues = filteredSteps.reduce((values, step) => {
    return { ...values, [step.name]: null };
  }, {});

  return initialValues;
};

export const getStepSchema = (currentIndex: number, steps: Step[]) => {
  return steps[currentIndex].validationSchema;
};
