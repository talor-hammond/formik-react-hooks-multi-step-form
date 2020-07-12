import * as Yup from "yup";

export default Yup.object({
  emailAddress: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter an email address")
    .nullable(),
});
