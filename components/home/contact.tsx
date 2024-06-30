"use client";
import { contactFormFields } from "@/helpers/form/fieldsArray";
import { ContactFormFieldsType } from "@/types/form";
import FormikFieldProvider from "@/uikits/form";
import { Form, useFormik } from "formik";
import React, { useState } from "react";
import { FormikProvider } from "formik";
import {
  PhEnvelopeBold,
  PhMapPinSimpleBold,
  PhPhoneBold,
  PhShootingStarFill,
} from "@/uikits/icons";
import { FormBtn } from "@/uikits/button";
import { ContactValidation } from "@/helpers/form/validation";
import axios from "axios";
import ConfettiExplosion from "react-confetti-explosion";

function Contact() {
  const formik = useFormik<ContactFormFieldsType>({
    initialValues: {
      fullname: "",
      email: "",
      message: "",
    },
    onSubmit: handleSubmit,
    validationSchema: ContactValidation,
    validateOnMount: true,
  });
  const { isValid, isSubmitting, setSubmitting } = formik;
  const [messageSent, setMessageSent] = useState<boolean>(false);
  const [hideConfetti, setHC] = useState<boolean>(false);

  function handleSubmit(formValues: ContactFormFieldsType) {
    axios
      .post("/api/contact", formValues)
      .then((res) => setMessageSent(true))
      .catch((err) => alert("Merde"))
      .finally(() => setSubmitting(false));
  }
  return (
    <div className="pageContainer home-contact" id="contact">
      {messageSent ? (
        <section>
          {!hideConfetti && (
            <ConfettiExplosion
              duration={3000}
              particleCount={800}
              zIndex={100}
              width={2000}
              onComplete={() => setHC(true)}
            />
          )}
          <div className="contactMessageSent">
            <PhShootingStarFill />
            <h2>Félicitation !</h2>
            <p>Votre message a bien été envoyé.</p>
            <button
              onClick={() => {
                setMessageSent(false);
                setHC(false);
              }}
            >
              J'ai compris
            </button>
          </div>
        </section>
      ) : (
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
              <FormBtn
                text={isSubmitting ? "..." : "Soumettre"}
                isValid={isSubmitting ? false : isValid}
              />
            </Form>
          </FormikProvider>
        </section>
      )}
    </div>
  );
}

export default Contact;
