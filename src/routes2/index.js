import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../routes/HomePage";
import Signin from "../components/Signin/Signin";
import Signup from "../components/Signup/Signup";

const PrivateRoute = ({ element: Element }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Element /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/home" element={<PrivateRoute element={Home} />} />
        <Route path="/" element={<Signin />} />
        <Route path="/Singup" element={<Signup />} />
        <Route path="*" element={<Signin />} />
      </Routes>
    </Fragment>
  );
};

export default RoutesApp;
