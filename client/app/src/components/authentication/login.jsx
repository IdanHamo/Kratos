import { useFormik } from "formik";
import Joi from "joi";
import { useState } from "react";
import httpService from "../../services/httpService";
import { login } from "../../services/userService";
const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      username: "",
      password: "",
    },
    validate: function (values) {
      const schema = Joi.object({
        username: Joi.string().required().min(2),
        password: Joi.string().min(6).max(1024).required(),
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
      const user = {
        username: values.username,
        password: values.password,
      };
      console.log(user);

      try {
        const { data } = await login(user);
        console.log(data);
      } catch ({ data }) {
        console.log(data);
      }
    },
  });
  return (
    <div className="container mt-10">
      <div className="text-center registration-container ">
        <span className="registration-headline">התחברות </span>
        <span className="registration-secondary-headline">לכניסה</span>
      </div>
      <div className="registration-container container min-w-full">
        <form
          className="p-4 col-md-8 min-w-full"
          noValidate
          onSubmit={form.handleSubmit}
        >
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
            id="password"
            placeholder="סיסמא"
            {...form.getFieldProps("password")}
            error={form.touched.password && form.errors.password}
          />

          <div className="min-w-full flex justify-center">
            <button className="confirmButton" type="submit">
              התחברות
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
