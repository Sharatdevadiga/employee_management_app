import { useFormik } from "formik";
import validate from "validate.js";

const validationSchema = {
  name: {
    presence: { allowEmpty: false, message: "is required" },
  },
  email: {
    presence: { allowEmpty: false, message: "is required" },
    email: { message: "is not valid" },
  },
  mobile: {
    presence: { allowEmpty: false, message: "is required" },
    format: {
      pattern: "\\d{10}",
      message: "must be a valid 10-digit number",
    },
  },
  designation: {
    presence: { allowEmpty: false, message: "is required" },
  },
  gender: {
    presence: { allowEmpty: false, message: "is required" },
  },
  course: {
    presence: { allowEmpty: false, message: "is required" },
  },
};

const CreateEmployee = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      designation: "",
      gender: "",
      course: [],
      img: null,
    },
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
      className="bg-gray-100 flex w-full flex-col items-center justify-center"
    >
      <div className="w-full max-w-md rounded border border-stone-900 p-8 shadow-md shadow-slate-600">
        <h2 className="mb-6 text-center text-2xl font-bold">Create Employee</h2>

        <div className="relative mb-8 grid-cols-3 items-baseline md:grid">
          <label htmlFor="name" className="text-gray-700 block">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="col-span-2 mt-1 w-full rounded border bg-transparent p-2"
          />
          {formik.errors.name && (
            <div className="absolute bottom-[-16px] right-0 mt-1 text-[10px] text-red-500">
              {formik.errors.name}
            </div>
          )}
        </div>

        <div className="relative mb-8 grid-cols-3 items-baseline md:grid">
          <label htmlFor="email" className="text-gray-700 block">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="col-span-2 mt-1 w-full rounded border bg-transparent p-2"
          />
          {formik.errors.email && (
            <div className="absolute bottom-[-16px] right-0 mt-1 text-[10px] text-red-500">
              {formik.errors.email}
            </div>
          )}
        </div>

        <div className="relative mb-8 grid-cols-3 items-baseline md:grid">
          <label htmlFor="mobile" className="text-gray-700 block">
            Mobile No
          </label>
          <input
            id="mobile"
            name="mobile"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.mobile}
            className="col-span-2 mt-1 w-full rounded border bg-transparent p-2"
          />
          {formik.errors.mobile && (
            <div className="absolute bottom-[-16px] right-0 mt-1 text-[10px] text-red-500">
              {formik.errors.mobile}
            </div>
          )}
        </div>

        <div className="relative mb-8 grid-cols-3 items-baseline md:grid">
          <label htmlFor="designation" className="text-gray-700 block">
            Designation
          </label>
          <select
            id="designation"
            name="designation"
            onChange={formik.handleChange}
            value={formik.values.designation}
            className="col-span-2 mt-1 w-full rounded border bg-black bg-transparent p-2"
          >
            <option value="" label="Select designation" />
            <option value="HR" label="HR" />
            <option value="Manager" label="Manager" />
            <option value="Sales" label="Sales" />
          </select>
          {formik.errors.designation && (
            <div className="absolute bottom-[-16px] right-0 mt-1 text-[10px] text-red-500">
              {formik.errors.designation}
            </div>
          )}
        </div>

        <div className="relative mb-8 grid-cols-3 items-baseline md:grid">
          <label className="text-gray-700 block">Gender</label>
          <div className="flex items-center">
            <input
              id="male"
              name="gender"
              type="radio"
              value="M"
              onChange={formik.handleChange}
              className="mr-2"
            />
            <label htmlFor="male" className="mr-4">
              Male
            </label>
            <input
              id="female"
              name="gender"
              type="radio"
              value="F"
              onChange={formik.handleChange}
              className="mr-2"
            />
            <label htmlFor="female">Female</label>
          </div>
          {formik.errors.gender && (
            <div className="absolute bottom-[-16px] right-0 mt-1 text-[10px] text-red-500">
              {formik.errors.gender}
            </div>
          )}
        </div>

        <div className="relative mb-8 grid-cols-3 items-baseline md:grid">
          <label className="text-gray-700 block">Course</label>
          <div className="flex items-center">
            <input
              id="mca"
              name="course"
              type="checkbox"
              value="MCA"
              onChange={formik.handleChange}
              className="mr-2"
            />
            <label htmlFor="mca" className="mr-4">
              MCA
            </label>
            <input
              id="bca"
              name="course"
              type="checkbox"
              value="BCA"
              onChange={formik.handleChange}
              className="mr-2"
            />
            <label htmlFor="bca" className="mr-4">
              BCA
            </label>
            <input
              id="bsc"
              name="course"
              type="checkbox"
              value="BSC"
              onChange={formik.handleChange}
              className="mr-2"
            />
            <label htmlFor="bsc">BSC</label>
          </div>
          {formik.errors.course && (
            <div className="absolute bottom-[-16px] right-0 mt-1 text-[10px] text-red-500">
              {formik.errors.course}
            </div>
          )}
        </div>

        <div className="relative mb-8 grid-cols-3 items-baseline md:grid">
          <label htmlFor="img" className="text-gray-700 block">
            Img Upload
          </label>
          <input
            id="img"
            name="img"
            type="file"
            onChange={(event) =>
              formik.setFieldValue("img", event.currentTarget.files[0])
            }
            className="col-span-2 mt-1 w-full rounded border bg-transparent p-2"
          />
          {formik.errors.img && (
            <div className="absolute bottom-[-16px] right-0 mt-1 text-[10px] text-red-500">
              {formik.errors.img}
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

export default CreateEmployee;
