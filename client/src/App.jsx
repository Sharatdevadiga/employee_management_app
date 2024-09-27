import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import Login from "./pages/Login";
import { store } from "./store";
import CreateEmployee from "./pages/CreateEmployee";
import Layout from "./components/Layout";
import EMployeeList from "./pages/EMployeeList";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import EditEmployee from "./pages/EditEmployee";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="createEmployee"
            element={
              <ProtectedRoute>
                <CreateEmployee />
              </ProtectedRoute>
            }
          />
          <Route
            path="employeeList"
            element={
              <ProtectedRoute>
                <EMployeeList />
              </ProtectedRoute>
            }
          />
          <Route
            path="employee/:id"
            element={
              <ProtectedRoute>
                <EditEmployee />
              </ProtectedRoute>
            }
          />
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
