import { Button } from "@material-ui/core";
import React from "react";
import "./Wrapper.scss";

const Wrapper = () => {
  return (
    <div className="wrapper">
      <article className="wrapper__content">
        <h1>Your world is about to be rocked</h1>
        <Button color="secondary" variant="contained">
          Discover DRNK
        </Button>
      </article>
    </div>
  );
};

export default Wrapper;
