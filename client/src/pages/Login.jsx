import { useFormik } from "formik";
import validate from "validate.js";
import Logo from "../components/Logo";

// Step 2: Define validation schema
const validationSchema = {
  email: {
    presence: { allowEmpty: false, message: "is required" },
    email: { message: "is not valid" },
  },
  password: {
    presence: { allowEmpty: false, message: "is required" },
    length: { minimum: 6, message: "must be at least 6 characters" },
  },
};

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // Step 3: Integrate validation with Formik
    validate: (values) => {
      const errors = validate(values, validationSchema);
      return errors || {};
    },
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-gray-100 flex h-screen w-screen flex-col items-center justify-center"
    >
      <Logo></Logo>
      <div className="w-full max-w-md rounded border border-stone-900 p-8 shadow-md shadow-stone-500">
        <h2 className="mb-6 text-center text-2xl font-bold">Login</h2>
        <div className="relative mb-8">
          <label htmlFor="email" className="text-gray-700 block">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="mt-1 w-full rounded border bg-gray-transparent p-2"
          />
          {formik.errors.email && (
            <div className="absolute bottom-[-16px] mt-1 text-[10px] text-red-500">
              {formik.errors.email}
            </div>
          )}
        </div>
        <div className="relative mb-8">
          <label htmlFor="password" className="text-gray-700 block">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="mt-1 w-full rounded border bg-transparent p-2"
          />
          {formik.errors.password && (
            <div className="absolute bottom-[-16px] mt-1 text-[10px] text-red-500">
              {formik.errors.password}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="w-full rounded bg-primary py-2 text-white shadow-md shadow-purple-800 transition duration-200 hover:bg-purple-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Login;
