import React from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Router from "./router";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { init } from "./store/index";
import { Provider } from "react-redux";
import { authUserLoaded } from "./store/action/auth";
function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App(props) {
  const [mode, setMode] = React.useState("light");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  const store = init();
  React.useEffect(() => {
    store.dispatch(authUserLoaded());
  }, [store]);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Paper>
            <Router colorModeContext={ColorModeContext} />
            <ScrollTop {...props}>
              <Fab size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
              </Fab>
            </ScrollTop>
          </Paper>
        </Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
