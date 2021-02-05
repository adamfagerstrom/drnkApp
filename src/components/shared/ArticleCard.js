import React from "react";
import testImg from "../../assets/img/article2.jpg";
import "./ArticleCard.scss";

const ArticleCard = (props) => {
  return (
    <div
      className="article-card"
      style={{
        backgroundImage: `url(${props.imgsrc})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h3>{props.title}</h3>
    </div>
  );
};

export default ArticleCard;
