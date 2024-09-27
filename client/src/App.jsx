import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import Login from "./pages/Login";
import { store } from "./store";
import CreateEmployee from "./pages/CreateEmployee";
import Layout from "./components/Layout";
import EMployeeList from "./pages/EMployeeList";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="createEmployee" element={<CreateEmployee />} />
          <Route path="employeeList" element={<EMployeeList />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </Provider>
  );
}

export default App;
