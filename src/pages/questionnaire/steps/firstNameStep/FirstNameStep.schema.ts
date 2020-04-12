import * as Yup from "yup";

export default Yup.object({
  firstName: Yup.string()
    .required("Please enter your first name")
    .nullable()
});
