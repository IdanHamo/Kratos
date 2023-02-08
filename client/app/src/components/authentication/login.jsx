import { useFormik } from "formik";
import Joi from "joi";
import { useState } from "react";
import { login } from "../../services/userService";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

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

      try {
        const response = await login(user);
        navigate("/");
      } catch ({ response }) {
        setError(response.data);
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
          {error && <div className="error-alert">{error}</div>}

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
