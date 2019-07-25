import React, { Component } from "react";
import "./App.css";
import * as Yup from "yup";
import Notifications, { notify } from "react-notify-toast";
import { Formik, Field, Form } from "formik";
import LoadingOverlay from "react-loading-overlay";
import { languages } from "./helpers";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lang: "en"
    };
  }
  changeLang = lang => {
    this.setState({ lang });
  };
  render() {
    return (
      <div className="wrapper">
        <Notifications />

        <div className="form-wrapper">
          <div className="flags">
            <img
              src="en.png"
              alt="en-flag"
              className={this.state.lang === "en" ? "active" : ""}
              onClick={() => this.changeLang("en")}
            />
            <img
              src="hr.png"
              alt="hr-flag"
              className={this.state.lang === "en" ? "" : "active"}
              onClick={() => this.changeLang("hr")}
            />
          </div>
          <h1>{languages[this.state.lang].header}</h1>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              password: "",
              confirmPassword: "",
              email: "",
              username: "",
              agreeToTerms: false
            }}
            onSubmit={(values, actions) => {
              let data = JSON.stringify(values);

              fetch("https://api.myjson.com/bins", {
                method: "POST",
                headers: {
                  Accept: "application/json, text/plain, */*",
                  "Content-Type": "application/json"
                },
                body: data
              })
                .then(res => {
                  return res.json();
                })
                .then(data => {
                  actions.setSubmitting(false);
                  // after successfull submit remove comment for clear form
                  // actions.resetForm();
                  notify.show(
                    ` ${languages[this.state.lang].success}, link: ${data.uri}`,
                    "success",
                    7000
                  );
                })
                .catch(err => {
                  console.log(err);
                  actions.setSubmitting(false);
                });
            }}
            validationSchema={() =>
              Yup.object().shape({
                firstName: Yup.string()
                  .min(2, languages[this.state.lang].firstName.errors.min)
                  .max(25, languages[this.state.lang].firstName.errors.max)
                  .required(languages[this.state.lang].required),
                lastName: Yup.string()
                  .min(2, languages[this.state.lang].lastName.errors.min)
                  .max(25, languages[this.state.lang].lastName.errors.max)
                  .matches(
                    /^\p{L}+$/u,
                    languages[this.state.lang].lastName.errors.onlyLetters
                  )
                  .required(languages[this.state.lang].required),
                email: Yup.string()
                  .email(languages[this.state.lang].email.errors)
                  .required(languages[this.state.lang].required),
                username: Yup.string()
                  .min(4, languages[this.state.lang].username.errors.min)
                  .max(20, languages[this.state.lang].username.errors.max)
                  .required(languages[this.state.lang].required),
                password: Yup.string()
                  .required(languages[this.state.lang].required)
                  .matches(
                    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/,
                    languages[this.state.lang].password.errors
                  ),
                confirmPassword: Yup.string()
                  .required(languages[this.state.lang].required)
                  .test(
                    "passwords-match",
                    languages[this.state.lang].confirmPassword.errors,
                    function(value) {
                      return this.parent.password === value;
                    }
                  ),
                agreeToTerms: Yup.boolean().test(
                  "is-true",
                  "Must agree to terms to continue",
                  value => value === true
                )
              })
            }
            render={({ values, errors, touched, isSubmitting }) => (
              <React.Fragment>
                <LoadingOverlay
                  active={isSubmitting}
                  spinner
                  text={languages[this.state.lang].loaderText}
                >
                  <Form>
                    <div className="firstName">
                      <label htmlFor="firstName">
                        {" "}
                        {languages[this.state.lang].firstName.label}
                      </label>
                      <Field
                        name="firstName"
                        className={
                          errors.firstName && touched.firstName ? "error" : null
                        }
                      />
                      {errors.firstName && touched.firstName ? (
                        <span className="errorMessage">{errors.firstName}</span>
                      ) : null}
                    </div>
                    <div className="lastName">
                      <label htmlFor="lastName">
                        {" "}
                        {languages[this.state.lang].lastName.label}
                      </label>
                      <Field
                        name="lastName"
                        className={
                          errors.lastName && touched.lastName ? "error" : null
                        }
                      />
                      {errors.lastName && touched.lastName ? (
                        <span className="errorMessage">{errors.lastName}</span>
                      ) : null}
                    </div>
                    <div className="email">
                      <label htmlFor="email">
                        {" "}
                        {languages[this.state.lang].email.label}
                      </label>
                      <Field
                        name="email"
                        type="email"
                        className={
                          errors.email && touched.email ? "error" : null
                        }
                      />
                      {errors.email && touched.email ? (
                        <span className="errorMessage">{errors.email}</span>
                      ) : null}
                    </div>
                    <div className="password">
                      <label htmlFor="username">
                        {" "}
                        {languages[this.state.lang].username.label}
                      </label>
                      <Field
                        name="username"
                        className={
                          errors.username && touched.username ? "error" : null
                        }
                      />
                      {errors.username && touched.username ? (
                        <span className="errorMessage">{errors.username}</span>
                      ) : null}
                    </div>
                    <div className="password">
                      <label htmlFor="password">
                        {" "}
                        {languages[this.state.lang].password.label}
                      </label>
                      <Field
                        name="password"
                        className={
                          errors.password && touched.password ? "error" : null
                        }
                      />
                      {errors.password && touched.password ? (
                        <span className="errorMessage">{errors.password}</span>
                      ) : null}
                    </div>
                    <div className="password">
                      <label htmlFor="confirmPassword">
                        {" "}
                        {languages[this.state.lang].confirmPassword.label}
                      </label>
                      <Field
                        name="confirmPassword"
                        className={
                          errors.confirmPassword && touched.confirmPassword
                            ? "error"
                            : null
                        }
                      />
                      {errors.confirmPassword && touched.confirmPassword ? (
                        <span className="errorMessage">
                          {errors.confirmPassword}
                        </span>
                      ) : null}
                    </div>

                    <label className="container">
                      {languages[this.state.lang].agreeToTerms}
                      <Field name="agreeToTerms" type="checkbox" />
                      <span
                        className={
                          errors.agreeToTerms && touched.agreeToTerms
                            ? "checkmark invalid"
                            : "checkmark"
                        }
                      />
                    </label>
                    {/* {errors.agreeToTerms && touched.agreeToTerms ? (
                    <div>{errors.agreeToTerms}</div>
                  ) : null} */}
                    <div className="createAccount">
                      <button disabled={isSubmitting} type="submit">
                        {" "}
                        {languages[this.state.lang].submit}
                      </button>
                    </div>
                  </Form>
                </LoadingOverlay>
              </React.Fragment>
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
