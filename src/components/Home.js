import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Wrapper from "./layout/Wrapper";
import ArticleCard from "./shared/ArticleCard";
import ArticleData from "../assets/data/articles";
import ProductionWrapper from "./layout/ProductionWrapper";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "400px",
  },
  articleHeading: {
    fontSize: "2rem",
    textTransform: "uppercase",
    paddingLeft: "2rem",
  },
  articleContainer: {
    marginTop: "2rem",
  },
}));

const Home = () => {
  const classes = useStyles();
  const articlesRaw = ArticleData;
  const Articles = articlesRaw.map((article) => (
    <Grid item xs={12} md={4}>
      <ArticleCard title={article.title} imgsrc={article.imgsrc} />
    </Grid>
  ));
  return (
    <section>
      <Wrapper />
      <Container
        maxWidth="xl"
        className={classes.articleContainer}
        disableGutters="true"
      >
        <Typography component={"h2"} className={classes.articleHeading}>
          Trending Articles
        </Typography>
        <Grid container spacing={2} className={classes.container}>
          {Articles}
        </Grid>
      </Container>
      <ProductionWrapper />
    </section>
  );
};

export default Home;
