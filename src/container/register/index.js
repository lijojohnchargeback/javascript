import React, { Fragment } from "react";
import validate from "validate.js";
import { Grid, Typography, TextField, Button } from "@mui/material";
import GoogleLogin from "../socialmedia/Google";
import FacebookLogins from "../socialmedia/Facebook";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../store/action/auth";

const schema = {
  name: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 40,
    },
  },
  email: {
    presence: { allowEmpty: false, message: "is required" },
    email: true,
    length: {
      maximum: 40,
    },
  },
  password: {
    presence: {
      allowEmpty: false,
      message: "is required",
    },
    length: {
      maximum: 20,
      minimum: 6,
      tooShort: "needs to have %{count} words or more",
    },
  },
};
const SignIn = () => {
  const [formData, setFormData] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });
  let [show, setShow] = React.useState(false);
  const navigate = useNavigate();
  React.useEffect(() => {
    const errors = validate(formData.values, schema);

    setFormData((formData) => ({
      ...formData,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formData.values]);
  const handleChange = (e) => {
    e.persist();
    setFormData((formData) => ({
      ...formData,
      values: { ...formData.values, [e.target.name]: e.target.value },
      touched: { ...formData.touched, [e.target.name]: true },
    }));
  };

  const { email, password, name } = formData.values;
  let hasError = (field) => {
    if (formData.touched[field] && formData.errors[field]) {
      return true;
    } else if (formData.errors[field] && show) {
      return true;
    } else {
      return false;
    }
  };
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    Object.keys(formData.errors).length > 0 ? setShow(true) : setShow(false);
    Object.keys(formData.errors).length === 0 && navigate("/create");
    Object.keys(formData.errors).length === 0 &&
      dispatch(register(formData.values));
  };
  return (
    <Fragment>
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={10} sm={10} md={10} lg={5} xl={8}>
          <Typography
            variant="h4"
            color="primary"
            align="center"
            gutterBottom
            style={{ marginTop: 40 }}
          >
            Register
          </Typography>
          <br />
          <Typography align="center" gutterBottom>
            Login with Social media
          </Typography>

          <Grid container>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <FacebookLogins />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <GoogleLogin />
            </Grid>
          </Grid>
          <br />
          <form>
            <TextField
              required
              onChange={handleChange}
              label="Name"
              margin="normal"
              variant="outlined"
              type="text"
              value={name || ""}
              error={hasError("name")}
              helperText={hasError("name") ? formData.errors.name[0] : null}
              fullWidth
              name={"name"}
            />
            <TextField
              required
              onChange={handleChange}
              label="Email"
              margin="normal"
              variant="outlined"
              value={email || ""}
              error={hasError("email")}
              helperText={hasError("email") ? formData.errors.email[0] : null}
              fullWidth
              name={"email"}
            />
            <TextField
              required
              onChange={handleChange}
              label="Password"
              type="password"
              margin="normal"
              variant="outlined"
              helperText={
                hasError("password") ? formData.errors.password[0] : null
              }
              fullWidth
              error={hasError("password")}
              name="password"
              value={password || ""}
            />
            <div>
              <br />
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  handleSubmit();
                }}
                fullWidth
              >
                Register
              </Button>
            </div>
          </form>
          <br />
          <Typography variant="body2" align="center">
            forgot password
            <Link to="/forgotpassword"> Click here</Link>
          </Typography>
          <br />
          <div style={{ justifyContent: "center", display: "flex" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </div>
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 30,
            }}
          >
            <Link to="/about/tc">termsAndCondition</Link>
            <Link to="/about/pn">privacyNotice</Link>
            <Link to="https://www.youtube.com/channel/UCzUPjJqZmmdg-R0J8kF3OEg">
              Tutorial
            </Link>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default SignIn;
