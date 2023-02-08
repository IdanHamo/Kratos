import { useFormik } from "formik";
import Joi from "joi";
import { useState } from "react";
import httpService from "../../services/httpService";
import { createUser } from "../../services/userService";
const Registration = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: function (values) {
      const schema = Joi.object({
        username: Joi.string().required().min(2),
        email: Joi.string()
          .min(6)
          .max(1024)
          .email({ tlds: { allow: false } })
          .required(),

        password: Joi.string().min(6).max(1024).required(),
        confirmPassword: Joi.string().min(6).max(1024).required(),
      });
      const { error } = schema.validate(values, { abortEarly: false });
      if (!error) {
        return null;
      }
      const errors = {};
      for (const detail of error.details) {
        errors[detail.path[0]] = detail.message;
      }
      return errors;
    },
    async onSubmit(values) {
      const { password, confirmPassword } = values;
      if (password !== confirmPassword) {
        setError("The passwords not match");
        return;
      }
      const user = {
        username: values.username,
        email: values.email,
        password: values.password,
      };
      console.log(user);

      try {
        const request = await createUser(user);
        console.log(request);
      } catch ({ response }) {
        console.log(response.data);
      }
    },
  });
  return (
    <div className="container mt-10">
      <div className="text-center registration-container ">
        <span className="registration-headline">הרשמה </span>
        <span className="registration-secondary-headline">להצטרפות</span>
      </div>
      <div className="registration-container container min-w-full">
        <form
          className="p-4 col-md-8 min-w-full"
          noValidate
          onSubmit={form.handleSubmit}
        >
          {error && <div className="input">{error}</div>}
          <input
            type="text"
            className="input mb-4"
            id="username"
            placeholder="שם משתמש"
            {...form.getFieldProps("username")}
            error={form.touched.username && form.errors.username}
          />
          <br />
          <input
            type="text"
            className="input mb-4"
            id="email"
            placeholder="אימייל"
            {...form.getFieldProps("email")}
            error={form.touched.email && form.errors.email}
          />
          <br />
          <input
            type="text"
            className="input mb-4"
            id="password"
            placeholder="סיסמא"
            {...form.getFieldProps("password")}
            error={form.touched.password && form.errors.password}
          />
          <br />
          <input
            type="text"
            className="input mb-4"
            id="confirmPassword"
            placeholder="ווידוי סיסמא"
            {...form.getFieldProps("confirmPassword")}
            error={form.touched.confirmPassword && form.errors.confirmPassword}
          />
          <div className="min-w-full flex justify-center">
            <button className="confirmButton" type="submit">
              הרשמה
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
