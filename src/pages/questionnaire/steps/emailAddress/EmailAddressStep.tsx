import React from "react";
// Components
import { Input, InputLabel } from "@material-ui/core";
// Types
import { FormikProps, FormikValues } from "formik";
// Util
import { getInputProps } from "util/forms";

type EmailAddressStepProps = {
  form: FormikProps<FormikValues>;
  name: "emailAddress";
};

const EmailAddressStep = ({ form, name }: EmailAddressStepProps) => {
  return (
    <>
      <InputLabel>What's your email address?</InputLabel>
      <Input type="email" {...getInputProps(name, form)} />
    </>
  );
};

export default EmailAddressStep;
