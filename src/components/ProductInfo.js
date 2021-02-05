import {
  Button,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./ProductInfo.scss";

const useStyle = makeStyles((theme) => ({
  infocontainer: {
    maxHeight: "100vh",
    paddingTop: "3rem",
  },
  title: {
    fontSize: "48px",
  },
  subHeading: {
    fontSize: "34px",
  },
  paragraph: {
    fontSize: "18px",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
  },
  infoBox: {
    marginTop: "2rem",
  },
  numbers: {
    fontSize: "36px",
  },
  numbersHeading: {
    fontSize: "24px",
  },
}));

function ProductInfo({ match }) {
  const classes = useStyle();
  useEffect(() => {
    fetchProduct();
  }, []);
  const [product, setProduct] = useState([]);
  const fetchProduct = async () => {
    const fetchProduct = await fetch(
      `https://api.punkapi.com/v2/beers/${match.params.id}`
    );
    const product = await fetchProduct.json();
    setProduct(product[0]);
    console.log(product);
  };
  return (
    <Container className={classes.infocontainer}>
      <Grid container alignItems="flex-start">
        <Grid item xs={6} className={classes.imageContainer}>
          <img src={product.image_url}></img>
        </Grid>
        <Grid item xs={6}>
          <Typography component={"h2"} className={classes.title}>
            {product.name}
          </Typography>
          <Typography component={"h3"} className={classes.subHeading}>
            {product.tagline}
          </Typography>
          <Typography className={classes.paragraph}>
            {product.description}
          </Typography>
          <Grid container justify="space-around" className={classes.infoBox}>
            <Grid item xs={6}>
              <Typography className={classes.numbersHeading}>
                Alcohol level
              </Typography>
              <Typography className={classes.numbers}>
                {product.abv}%
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className={classes.numbersHeading}>
                First Brewed
              </Typography>
              <Typography className={classes.numbers}>
                {product.first_brewed}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductInfo;
