import * as Yup from "yup";
export const ContactValidation = () => {
  return Yup.object().shape({
    fullname: Yup.string().min(2, "Minimum 2 char").required("Required"),
    email: Yup.string().email("format invalide").required("Required"),
    message: Yup.string().min(100, "Minimum 100 char").required("Required"),
  });
};
