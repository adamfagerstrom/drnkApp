import React, { useState, useEffect } from "react";
import ProductCard from "./shared/ProductCard";
import "./Products.scss";
import {
  Container,
  Grid,
  makeStyles,
  Button,
  Typography,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    paddingTop: "84px",
  },
  pagebox: {
    marginTop: "2rem",
    marginBottom: "3rem",
  },
}));

const Products = () => {
  useEffect(() => {
    getProducts();
  }, []);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [disable, setDisabled] = useState(false);
  const classes = useStyle();

  const incrementPage = () => {
    setPage(page + 1);
  };
  const decrementPage = () => {
    setPage(page - 1);
  };
  useEffect(() => {
    getProducts();
    if (page === 1) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [page]);

  const getProducts = async () => {
    const productData = await fetch(
      `https://api.punkapi.com/v2/beers?page=${page}&per_page=12`
    );
    const products = await productData.json();
    setProducts(products);
  };

  const productCards = products.map((product) => (
    <Grid item xs={3} key={product.id}>
      <ProductCard
        title={product.name}
        desc={product.tagline}
        imgsrc={product.image_url}
        abv={product.abv}
        id={product.id}
      />
    </Grid>
  ));

  return (
    <Container className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography>All products</Typography>
        </Grid>
        <Grid container spacing={2}>
          {productCards}
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        justify="space-between"
        className={classes.pagebox}
      >
        <Button onClick={decrementPage} disabled={disable}>
          Previous page
        </Button>
        <Typography>{page}</Typography>
        <Button onClick={incrementPage}>Next page</Button>
      </Grid>
    </Container>
  );
};

export default Products;
