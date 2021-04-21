import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ContactForm = () => {
  const [isSuccess, setIsSuccess] = React.useState(false);

  return (
    <div>
      <Formik
        initialValues={{ email: "", name: "", message: "", submit: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.name) {
            errors.name = "Required";
          }

          return errors;
        }}
        onSubmit={(values, actions) => {
          setIsSuccess(false);
          setTimeout(() => {
            fetch(
              "https://restful-google-form.vercel.app/api/forms/1FAIpQLSeL3HNqTwTSuaXIzsHg3y6BHnKl6-R3r-bX2sff0wT2Fq4Xhg",
              {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({
                  "entry.762896947": values.email,
                  "entry.1167003003": values.name,
                  "entry.746630156": values.message,
                }),
              }
            )
              .then(() => {
                actions.setSubmitting(false);
                actions.resetForm();
                setIsSuccess(true);
              })
              .catch(() => {
                actions.setErrors({
                  submit: "Fail to submit, please retry later...",
                });
                actions.setSubmitting(false);
              });
          }, 500);
        }}
      >
        {(formik) => (
          <div className="container px-5 py-24 mx-auto flex">
            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Contact us with email
              </h2>
              <Form>
                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email*
                  </label>
                  <Field
                    type="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-400"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name*
                  </label>
                  <Field
                    type="name"
                    name="name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-400"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <Field
                    type="text"
                    name="message"
                    className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className={`w-full text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg ${
                    formik.isSubmitting ? "disabled:opacity-50" : ""
                  }`}
                >
                  Submit
                </button>
              </Form>
              <ErrorMessage
                name="submit"
                component="p"
                className="text-xs text-red-400 mt-3"
              />
              {formik.isSubmitting && (
                <p className="text-xs text-gray-500 mt-3">Submitting...</p>
              )}
              {isSuccess && (
                <p className="text-xs text-gray-500 mt-3">
                  Thanks for contacting us, we will reach out to you shortly.
                </p>
              )}
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default function ContactSection() {
  return (
    <section className="text-gray-600 body-font relative mb-8">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          scrolling="no"
          style={{
            filter: `grayscale(0.5) contrast(1.2) opacity(0.4)`,
            pointerEvents: "none",
          }}
          src="https://maps.google.com/maps?ll=25.069082, 121.535371&amp;width=100%25&amp;height=600&amp;hl=en&amp;q=10452%E5%8F%B0%E5%8C%97%E5%B8%82%E4%B8%AD%E5%B1%B1%E5%8D%80%E7%8E%89%E9%96%80%E8%A1%971%E8%99%9F+(DasIot)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      <ContactForm />
    </section>
  );
}
