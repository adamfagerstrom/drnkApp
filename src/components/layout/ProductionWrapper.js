import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import animation1 from "../../assets/img/animation1.png";
import animation2 from "../../assets/img/animation2.png";
import animation3 from "../../assets/img/animation3.png";
import "./ProductionWrapper.scss";

const useStyle = makeStyles((theme) => ({
  darkContainer: {
    backgroundColor: "#363636",
    padding: "2rem 0 2rem 0",
    marginTop: "4rem",
  },
  sectionHeading: {
    color: "rgba(255, 255, 255, 0.87)",
    marginBottom: "1.5rem",
    fontSize: "2rem",
    paddingLeft: "2rem",
  },
  gridCont: {
    maxWidth: "360px",
  },
}));

function ProductionWrapper() {
  const classes = useStyle();
  return (
    <Container maxWidth="xl" className={classes.darkContainer}>
      <Grid container spacing={2} justify="space-around">
        <Grid xs={12}>
          <Typography component="h2" className={classes.sectionHeading}>
            THE PROCESS
          </Typography>
        </Grid>

        <Grid item xs={12} md={4} className={classes.gridCont}>
          <div className="imagecontainer">
            <img src={animation1}></img>
          </div>
          <h3 className="card-heading">Harvest</h3>
          <p className="card-desc">
            We got our own fields that grows the truly special hops. In the case
            of collabs we only select the farms with certifications.
          </p>
        </Grid>
        <Grid item xs={12} md={4} className={classes.gridCont}>
          <div className="imagecontainer">
            <img src={animation3}></img>
          </div>
          <h3 className="card-heading">Production</h3>
          <p className="card-desc">
            We got our own fields that grows the truly special hops. In the case
            of collabs we only select the farms with certifications.
          </p>
        </Grid>
        <Grid item xs={12} md={4} className={classes.gridCont}>
          <div className="imagecontainer">
            <img src={animation2}></img>
          </div>
          <h3 className="card-heading">Resell</h3>
          <p className="card-desc">
            We got our own fields that grows the truly special hops. In the case
            of collabs we only select the farms with certifications.
          </p>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductionWrapper;
