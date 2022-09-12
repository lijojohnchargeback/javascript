import React, { Fragment } from "react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    color: "white",
  },
  // text: {},
});
const footList1 = [
  { name: "Company", route: "/company" },
  { name: "Career", route: "/company" },
  { name: "Condtion", route: "/company" },
  { name: "Privacy", route: "/company" },
  { name: "Refer and Earn", route: "/company" },
];
const footList2 = [
  { name: "Company", route: "/company" },
  { name: "Career", route: "/company" },
  { name: "Condtion", route: "/company" },
  { name: "Privacy", route: "/company" },
  { name: "Refer and Earn", route: "/company" },
];
const footList3 = [
  { name: "Company", route: "/company" },
  { name: "Career", route: "/company" },
  { name: "Condtion", route: "/company" },
  { name: "Privacy", route: "/company" },
  { name: "Refer and Earn", route: "/company" },
];
const footList4 = [
  { name: "Company", route: "/company" },
  { name: "Career", route: "/company" },
  { name: "Condtion", route: "/company" },
  { name: "Privacy", route: "/company" },
  { name: "Refer and Earn", route: "/company" },
];
const Footer = (props) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid style={{ color: "#FFFFFF", background: "#092C74" }} container>
        {/*  Fist column */}
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          xl={2}
          style={{
            padding: 40,
            marginTop: 40,
          }}
        >
          <div>
            <Typography variant="h6">About company</Typography>
            <br />
            {footList1.map((item) => (
              <Link
                to={`${item.name}`}
                key={item.name}
                className={classes.link}
              >
                <Typography>{item.name}</Typography>
              </Link>
            ))}
            <br />
          </div>
        </Grid>
        {/*  Second column */}
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          xl={2}
          style={{
            padding: 40,
            marginTop: 40,
          }}
        >
          <div>
            <Typography variant="h6">Products</Typography>
            <br />

            {footList2.map((item) => (
              <Link
                to={`${item.name}`}
                key={item.name}
                className={classes.link}
              >
                <Typography>{item.name}</Typography>
              </Link>
            ))}
            <br />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          xl={2}
          style={{
            padding: 40,
            marginTop: 40,
          }}
        >
          <Typography variant="h6">Address</Typography>
          <br />
          {footList3.map((item) => (
            <Link to={`${item.name}`} key={item.name} className={classes.link}>
              <Typography>{item.name}</Typography>
            </Link>
          ))}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          xl={2}
          style={{
            padding: 40,
            marginTop: 40,
          }}
        >
          <div>
            <Typography variant="h6">Reach us</Typography>
            <br />
            {footList4.map((item) => (
              <Link
                to={`${item.name}`}
                key={item.name}
                className={classes.link}
              >
                <Typography>{item.name}</Typography>
              </Link>
            ))}
            <br />
          </div>
        </Grid>{" "}
        {/*  Third column */}
        <div style={{ display: "flex", marginLeft: 20 }}>
          <img
            alt="alt"
            src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
            width="220"
          />
        </div>
      </Grid>

      <div style={{ color: "#FFFFFF", background: "#092C74" }}>
        <Typography align="center">@ FiveStarWeek 2021</Typography>
      </div>
    </Fragment>
  );
};

export default Footer;
