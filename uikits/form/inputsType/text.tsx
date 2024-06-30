import { FormikTextInputPropsType } from "@/types/form";
import { Field } from "formik";
import { emit } from "process";
import React from "react";

export function FormikTextInput(props: FormikTextInputPropsType) {
  const { name, fieldType, label, semi, ph } = props;
  return (
    <div className={"formikInput " + (semi ?? " fiSemi ")}>
      {label && <label>{label} </label>}
      <Field type={fieldType} name={name} placeholder={ph} />
    </div>
  );
}

export function FormikTextAreaInput(props: FormikTextInputPropsType) {
  const { name, fieldType, label, semi, ph } = props;
  return (
    <div className={"formikInput " + (semi ?? " fiSemi ")}>
      {label && <label>{label} </label>}
      <Field component="textarea" name={name} placeholder={ph} />
    </div>
  );
}

export function FormikEmailInput(props: FormikTextInputPropsType) {
  const { name, fieldType, label, semi, ph } = props;
  return (
    <div className={"formikInput " + (semi ?? " fiSemi ")}>
      {label && <label>{label} </label>}
      <Field type={"email"} name={name} placeholder={ph} />
    </div>
  );
}
