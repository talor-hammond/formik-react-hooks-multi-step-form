import React from "react";
// Components
import { Input, InputLabel } from "@material-ui/core";
// Types
import { FormikProps, FormikValues } from "formik";
// Util
import { getInputProps } from "util/forms";

type PhoneNumberStepProps = {
  form: FormikProps<FormikValues>;
  name: "phoneNumber";
};

const PhoneNumberStep = ({ form, name }: PhoneNumberStepProps) => {
  return (
    <>
      <InputLabel>What's your phone number?</InputLabel>
      <Input type="tel" {...getInputProps(name, form)} />
    </>
  );
};

export default PhoneNumberStep;
