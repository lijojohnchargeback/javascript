import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const PrivateRoute = (props) => {
  let { Component } = props;

  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  React.useEffect(() => {
    let token = auth.token;
    console.log(token);
    if (!token) {
      navigate("/login");
    }
  }, []);
  return (
    <Fragment>
      <Component />
    </Fragment>
  );
};

export default PrivateRoute;
