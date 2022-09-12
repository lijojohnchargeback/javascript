import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContentBar from "../container/Content";
// import PositioningActionsColumn from "../container/create/existing";
import DesktopMenu from "../container/layout";
import LoignPage from "../container/login";
import RegisterPage from "../container/register";
import PrivateRoute from "../container/private/index";

const RouterPage = (props) => {
  return (
    <Router>
      <DesktopMenu colorModeContext={props.colorModeContext}>
        <Fragment>
          <Routes>
            {/* <Route
              path="/create/project"
              exact
              element={<PrivateRoute Component={Project} />}
            /> */}
            <Route path="/" exact element={<ContentBar />} />
            <Route path="/login" exact element={<LoignPage />} />
            <Route path="/register" exact element={<RegisterPage />} />

            {/* <Route
              path="existingproject"
              exact
              element={<PositioningActionsColumn />}
            /> */}
          </Routes>
        </Fragment>
      </DesktopMenu>
    </Router>
  );
};

export default RouterPage;
