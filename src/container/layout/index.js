import React, { Fragment } from "react";
import Footer from "./Footer";
import DesktopMenuBar from "./Header";
import { Box, Container } from "@mui/system";

const DesktopMenu = (props) => {
  return (
    <Fragment>
      <DesktopMenuBar colorModeContext={props.colorModeContext} />
      <Box my={2}>
        <Container>
          <div style={{ minHeight: 500 }}>{props.children}</div>
        </Container>
      </Box>
      <Footer />
    </Fragment>
  );
};

export default DesktopMenu;
