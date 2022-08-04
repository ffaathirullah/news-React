import React from "react";
import "./newsItem.css";

const NewsItem = ({
  title,
  description,
  url,
  urlToImage,
  handlerDetail,
  content,
}) => {
  return (
    <div className="col-md-4 news-app ">
      <div className="news-item">
        <img className="news-img" src={urlToImage} alt={urlToImage} />
        <h3>
          <p>{title}</p>
        </h3>
        <p>{description}</p>
        <a href="#/" onClick={() => handlerDetail(description)}>
          Baca Selanjutnya
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
