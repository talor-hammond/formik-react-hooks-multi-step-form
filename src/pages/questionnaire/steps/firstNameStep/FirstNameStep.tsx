import React from "react";
// Components
import { Input } from "@material-ui/core";
// Types
import { FormikProps, FormikValues } from "formik";
// Util
import { getInputProps } from "util/forms";

type FirstNameProps = {
  form: FormikProps<FormikValues>;
  name: "firstName";
};

const FirstName = ({ form, name }: FirstNameProps) => {
  return (
    <>
      <Input {...getInputProps(name, form)} />
    </>
  );
};

export default FirstName;
