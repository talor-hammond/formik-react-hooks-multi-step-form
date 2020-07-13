import * as Yup from "yup";

export default Yup.object({
  phoneNumber: Yup.string().required("Please enter a phone number").nullable(),
});
