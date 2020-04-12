import { getIn, FormikProps, FormikValues } from "formik";

export const getInputProps = (
  name: string,
  formik: FormikProps<FormikValues>
) => {
  const value = getIn(formik.values, name);
  const error = getIn(formik.errors, name) && getIn(formik.touched, name);

  const props = {
    id: name,
    name: name,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: value || "",
    error
    // helperText: getIn(formik.errors, name)
  };

  return props;
};
