import { useFormik } from "formik";
import validate from "validate.js";
import Logo from "../components/Logo";
import { BASE_URL, LOGIN } from "../config/endpoints";
import useCustomFetcher from "../hooks/useCustomFetcher";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { markAuthenticated } from "../slice/Auth";
import { useNavigate } from "react-router";

// Step 2: Define validation schema
const validationSchema = {
  name: {
    presence: { allowEmpty: false, message: "is required" },
  },
  password: {
    presence: { allowEmpty: false, message: "is required" },
    length: { minimum: 6, message: "must be at least 6 characters" },
  },
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { customFetcher, isLoading: isSumbitting } = useCustomFetcher();

  const formik = useFormik({
    initialValues: {
      name: "Administrator",
      password: "testpassword",
    },

    validate: (values) => {
      const errors = validate(values, validationSchema);
      return errors || {};
    },
    onSubmit: async (values) => {
      const { data, error } = await customFetcher(
        "POST",
        `${BASE_URL}${LOGIN}`,
        values,
      );
      if (data && data.status === "success") {
        dispatch(
          markAuthenticated({ isAuthenticated: true, user: values.name }),
        );
        toast.success("Login successful!");
        return navigate("/");
      } else {
        toast.error(`Login failed: ${error || "Unknown error"}`);
      }
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
            User Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="mt-1 w-full rounded border bg-gray-transparent p-2"
          />
          {formik.errors.name && (
            <div className="absolute bottom-[-16px] mt-1 text-[10px] text-red-500">
              {formik.errors.name}
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
          disabled={isSumbitting}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Login;
