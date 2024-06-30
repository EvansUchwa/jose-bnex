"use client";
import { contactFormFields } from "@/helpers/form/fieldsArray";
import { ContactFormFieldsType } from "@/types/form";
import FormikFieldProvider from "@/uikits/form";
import { Form, useFormik } from "formik";
import React from "react";
import { FormikProvider } from "formik";
import {
  PhEnvelopeBold,
  PhMapPinSimpleBold,
  PhPhoneBold,
} from "@/uikits/icons";

function Contact() {
  const formik = useFormik<ContactFormFieldsType>({
    initialValues: {
      fullname: "",
      email: "",
      message: "",
    },
    onSubmit: handleSubmit,
  });

  function handleSubmit(formValues: ContactFormFieldsType) {}
  return (
    <div className="pageContainer home-contact" id="contact">
      <section>
        <h2>Contact</h2>
        <div className="hc-contactInfos">
          <a href="">
            {" "}
            <PhEnvelopeBold /> contact@bnex.bj{" "}
          </a>
          <a href="">
            {" "}
            <PhPhoneBold /> +229-90000000
          </a>
          <a href="#">
            <PhMapPinSimpleBold /> Cotonoue,Rue 17 Sikecodji{" "}
          </a>
        </div>
        <FormikProvider value={formik}>
          <Form>
            {contactFormFields.map((item, i) => (
              <FormikFieldProvider {...item} key={"contact field nb " + i} />
            ))}
          </Form>
        </FormikProvider>
        {/* <form action=""></form> */}
      </section>
    </div>
  );
}

export default Contact;
