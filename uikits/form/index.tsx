import { FormikFieldProviderPropsType } from "@/types/form";
import React from "react";
import {
  FormikEmailInput,
  FormikTextAreaInput,
  FormikTextInput,
} from "./inputsType/text";

function FormikFieldProvider(props: FormikFieldProviderPropsType) {
  const { fieldType } = props;
  if (fieldType == "text") {
    return <FormikTextInput {...props} />;
  } else if (fieldType == "textarea") {
    return <FormikTextAreaInput {...props} />;
  } else if (fieldType == "email") {
    return <FormikEmailInput {...props} />;
  }
}

export default FormikFieldProvider;
