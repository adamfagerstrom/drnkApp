import { Button } from "@material-ui/core";
import React from "react";
import "./ProductCard.scss";
import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <div className="product-card">
      <div className="image-container">
        <p>{props.abv}%</p>
        <img src={props.imgsrc}></img>
      </div>
      <h3 className="product-title">{props.title}</h3>
      <p className="product-desc">{props.desc}</p>
      <Link to={`/products/${props.id}`}>
        <Button variant="outlined">Learn more</Button>
      </Link>
    </div>
  );
}

export default ProductCard;
