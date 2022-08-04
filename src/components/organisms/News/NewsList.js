import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import { useNavigate } from "react-router-dom";

const NewsList = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=technology&apiKey=8e6778eef74d4e3da39e430ce3cd0899`
      );
      setArticles(response.data.articles);
    };

    getArticles();
  }, []);

  const handlerDetail = (content) => {
    navigate(`/newsDetails/${content}`);
  };

  console.log(articles);

  return (
    <div>
      <div className="d-flex justify-content-center align-self-center mb-5 mt-2">
        <h1>Today News :</h1>
      </div>
      <div className="d-flex mx-3 row justify-content-center">
        {articles.map((article) => {
          return (
            <>
              <NewsItem
                handlerDetail={handlerDetail}
                name={article.publishedAt}
                title={article.title}
                description={article.description}
                url={article.url}
                urlToImage={article.urlToImage}
                content={article.content}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default NewsList;
